// const validateField = (field: string, value: string): string | null => {
//     if (field === "name") {
//       if (!value.trim()) return "Imię jest wymagane";
//       return null;
//     }
//     if (field === "phone") {
//       const poland = /^(\+48)?\d{9}$/;
//       const ukraine = /^(\+380)?\d{10}$/;
//       if (!value) return "Numer telefonu jest wymagany";
//       if (!poland.test(value) && !ukraine.test(value)) {
//         return "Numer telefonu musi być 9 cyfr (PL) lub +48 9 cyfr / +380 10 cyfr (UA)";
//       }
//       return null;
//     }
//     if (field === "email") {
//       if (!value) return "Email jest wymagany";
//       if (!value.includes("@") || !value.includes(".")) return "Niepoprawny email. Może zapomniałeś o @ albo . ?";
//       return null;
//     }
//     return null;
//   };