function grade(marks)
//calculates the grade based on the marks input
{
    if (marks>=0 && marks<40)
    //if the marks are less than 40
        {
        return "E"}
        else if  (marks>=40 && marks<49)
        //if the marks are ranging from 40 to 48
    {
            return "D"
        }
        else if (marks >=49 && marks<60)
        //if the marks are ranging from 49 to 59
        {
            return "C"
        }
        else if (marks>=60 && marks<80)
        //if marks are ranging from 60 to 79
        {
            return "B"
        }
        else if(marks>=80 && marks <= 100)
        //if marks are ranging from 80 to 100
        {
            return "A"
        }
        else {return "Wrong Input of Marks"}
        //if a mark that is not ranging from 0 to 100
    }