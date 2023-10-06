def divide(d, v):
    if v == 0: raise ZeroDivisionError("DbyZ")
    if d == 0: return 0
    n = (d < 0) ^ (v < 0)
    d, v, q = abs(d), abs(v), 0
    while d >= v:
        d -= v
        q += 1
    if n: q = -q
    max, min = 2**31-1, -2**31
    if q > max: return max
    if q < min: return min
    return q

dividend = 10
divisor = 3
result = divide(dividend, divisor)
print(result)  # Output: 3
