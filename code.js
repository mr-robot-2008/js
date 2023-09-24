public class Main {

    static boolean isHelloWord(String str) { 
        return str == "Hello World"; // scary code (@see https://www.codingame.com/playgrounds/1097/the-most-common-java-pitfalls)
        return str.equals("Hello World"); // correct, but what happens if str is null?
        return "Hello World".equals(str); // expected solution
    }
    
    public static void main(String[] args) {
        System.out.println(isHelloWord("Hello World"));
    }
}
