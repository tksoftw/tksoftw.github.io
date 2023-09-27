def sumDouble(n):
    result = 0
    for i in range(n):
        result += i*2
    return result
    
if __name__ == '__main__':
    return sumDouble(100000000)