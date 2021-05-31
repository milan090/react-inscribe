type ModifierCommand = "BOLD" | "ITALIC" | "UNDERLINE" | "STRIKE";

export const modifyHtml = (command: ModifierCommand) => {
  try {
    switch (command) {
      case "BOLD":
        document.execCommand("bold");
        break;

      case "ITALIC":
        document.execCommand("italic");
        break;

      case "UNDERLINE": {
        document.execCommand("underline");
        break;
      }

      case "STRIKE": {
        document.execCommand("strikeThrough");
        break;
      }

      default:
        throw new Error("Invalid command");
    }
  } catch (error) {
    console.error(error);
  }
};
