def log_execution(function):
    def wrapper(scenario):
        print(f"Process Start. Function name: {function.__name__}")
        result = function(scenario)
        print(f"Process finished. Function: {function.__name__}")
        return result
    return wrapper