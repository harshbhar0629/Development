```
"0" == null
"0" == undefined
"0" == false
"0" == NaN
"0" == " "
```

#1 If Type(x) is the same as Type(y), then
    Return the result of performing Strict Equality Comparison x === y.
#2 If x is null and y is undefined, return true.
#3 If x is undefined and y is null, return true.
#4 If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
#5 If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
#6 If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
#7 If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
#8 If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
#9 If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
#10 Return false.