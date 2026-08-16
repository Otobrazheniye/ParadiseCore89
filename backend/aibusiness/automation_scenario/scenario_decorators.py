from functools import wraps
from collections.abc import Callable
from typing import TypeVar, ParamSpec, cast

from ..models import AutomationScenario


R = TypeVar("R")      # тип возвращаемого значения
P = ParamSpec("P")    # набор параметров функции


def audit_action(action_name: str) -> Callable[[Callable[P,R]], Callable[P,R]]:
    def decorator(function: Callable[P,R]) -> Callable[P,R]:
        @wraps(function)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
            try:
                result = function(*args, **kwargs)
            except Exception as error:
                print(f"Action: {action_name} \n  Function: {function.__name__} \n  Result: failed \n  Error: {error}")
                raise
            else:
                print(f"Action: {action_name} \n Function: {function.__name__}\n Result: success")
            return result
        return wrapper
    return decorator


class CountPublishCalls:
    def __init__(self):
        self.count = 0

    def __call__(self, function: Callable[P,R]) -> Callable[P,R]:
        @wraps(function)
        def wrapper(*args: P.args, **kwargs: P.kwargs)-> R:
            self.count += 1
            return function(*args, **kwargs)
        return wrapper


class CountSuccessPublishCalls:
    def __init__(self):
        self.count = 0

    def __call__(self, function: Callable[P,R]) -> Callable[P,R]:
        @wraps(function)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
            result = function(*args, **kwargs)
            self.count += 1
            return result
        return wrapper


def allowed_status(*statuses: str):
    def decorator(function: Callable[P,R]) -> Callable[P,R]:
        @wraps(function)
        def wrapper(*args: P.args, **kwargs: P.kwargs)-> R:
            if args:
                scenario = cast(AutomationScenario, args[0])
            else:
                scenario = kwargs.get("scenario")

                if scenario is None:
                    raise ValueError("Scenario argument is required")
                scenario = cast(AutomationScenario, kwargs["scenario"])
            if scenario.status not in statuses:
                raise ValueError("Status is not allowed")
            return function(*args, **kwargs)
        return wrapper
    return decorator
    

def log_execution(function: Callable[P,R])-> Callable[P,R]:
# def log_execution(function: Callable[...,R])-> Callable[...,R]:
# def log_execution(function: Callable)-> Callable:
# def log_execution(function):
    @wraps(function)
    def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
    # def wrapper(*args, **kwargs):
        print(f"Process Start. Function name: {function.__name__}")
        try:
            result = function(*args, **kwargs)
        except Exception as error:
            print(f"Process failed. Function: {function.__name__}. " f"Error: {error}")
            raise
        else:
            print(
                f"Process successfully ended. "
                f"Function: {function.__name__}"
            )
        finally:
            print(f"Process ended. Function: {function.__name__}")
        return result
    return wrapper