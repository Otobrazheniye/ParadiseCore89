from ..models import AutomationScenario
from .scenario_decorators import log_execution

@log_execution
def publish_scenario(scenario: AutomationScenario,)->AutomationScenario:
    scenario.status = AutomationScenario.Status.PUBLISHED
    scenario.save()
    return scenario