import { USERS } from "@/lib/auth";
import { generateToken } from "@/utils/jwt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Simulating a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //  validation
    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    // checking if user alredy exists
    const user = USERS.find((u) => u.email === email);
    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 409 }
      );
    }

    if (user.password !== password) {
      return Response.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // generating token
    const token = generateToken({ email, role: user.role || "storekeeper" });

    //  success response
    return Response.json(
      {
        success: true,
        message: "User logged in successfully",
        user: { email },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
