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
    if (user) {
      return Response.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    }

    // generating token
    const token = generateToken({ email, role: "storekeeper" });

    //  success response
    return Response.json(
      {
        success: true,
        message: "User registered successfully",
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
