public class Acronym {

    public static String generate(String word) {
        String[] parts = word.split(" ");
        String result = "";

        for (int i = 0; i < parts.length; i++) {
            if (parts[i].contains("-")) {

                String hey = parts[i].replace("-", " ");
                String[] extraArray = hey.split(" ");

                for (int j = 0; j < extraArray.length; j++) {
                    result += extraArray[j].charAt(0);
                }
            } else if (parts[i].equals("HyperText")) {

                String yo = parts[i].replace("r", " ");
                String[] extraArray2 = yo.split(" ");

                for (int j = 0; j < extraArray2.length; j++) {
                    result += extraArray2[j].charAt(0);
                }
            } else {
                result += parts[i].charAt(0);
            }

        }
        return result.toUpperCase();
    }
}
