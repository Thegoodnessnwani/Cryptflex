/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(displayName: string): string {
  const names = displayName.trim().split(/\s+/);
  if (names.length >= 2) {
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  } else if (names.length === 1) {
    return names[0][0].toUpperCase();
  } else {
    return "";
  }
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


export function getPhotoUrl(file: File) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise<string>((resolve) => {
      reader.onload = () => {
          resolve(reader.result as string);
      };
  });
}