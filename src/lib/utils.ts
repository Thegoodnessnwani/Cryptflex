import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

class FirebaseErrorParser {
  private errorMap: { [key: string]: string };

  constructor() {
    this.errorMap = {
      // Add more error codes and messages as needed
      'auth/email-already-in-use': 'Email address already in use.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/weak-password': 'Password is too weak.',
      'auth/invalid-credential': 'Invalid credentials.',
      // ... other error codes and messages
    };
  }

  parseError(errorCode: string): { code: string; message: string } {
    const defaultMessage = 'An error occurred.';

    const errorMessage = this.errorMap[errorCode] || defaultMessage;

    return {
      code: errorCode,
      message: errorMessage,
    };
  }
}

export const errorParser = new FirebaseErrorParser();

