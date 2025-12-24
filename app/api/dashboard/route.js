import { dashData } from "@/lib/data";

export const GET = async () => {    
  try {
    return Response.json(dashData);
  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
};
