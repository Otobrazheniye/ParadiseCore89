from ..models import AutomationScenario
from .scenario_decorators import (
    log_execution, allowed_status,
    CountPublishCalls, CountSuccessPublishCalls)

# decorator = allowed_statuses("draft", "review")
# publish_scenario = decorator(publish_scenario)
# publish_scenario = log_execution(
# allowed_status("draft", "review")(publish_scenario))
# log_execution -> w,p, try -> function(*args, **kwargs) ->x allowed_status(...)(publish_scenario) x<-> allowed_status.wrapper
try_publish_counter = CountPublishCalls()
success_publish_counter = CountSuccessPublishCalls()

@try_publish_counter
@log_execution
@allowed_status("draft","review")
@success_publish_counter
def publish_scenario(scenario: AutomationScenario,) -> AutomationScenario:
    scenario.status = AutomationScenario.Status.PUBLISHED
    scenario.save()
    return scenario



@log_execution
def change_scenario_status(scenario: AutomationScenario, name_status: str,) -> AutomationScenario:
    if name_status not in AutomationScenario.Status.values:
        raise ValueError("Invalid scenario status")
    scenario.status = name_status
    scenario.save()
    return scenario