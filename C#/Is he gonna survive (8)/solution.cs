class Kata
{
    public static bool Hero(int bullets, int dragons)
    {
        return bullets >= dragons*2;
    }
}

public static bool Hero(int bullets, int dragons) => dragons * 2 <= bullets;