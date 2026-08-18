class ScenarioDraft:
    pass


scenario = ScenarioDraft()
scenario.title = "CRM Automation"
scenario.status = "review"


# <-----------getattr------------->
field_name = "status"


getattr(scenario, field_name, 0) 
# Status -> review
# смотрит значение переменной field_name
# получает "status"
# ищет scenario.status


# <-----------setattr------------->
# 1.1 Input
field_name = "status"
new_value = "published"

setattr(scenario, field_name, new_value)
# scenario.status = "published"

# 1.2 Input
data = {
    "title": "New Automation",
    "status": "review",
    "estimated_hours": 20,
}


for field_name, value in data.items():
    setattr(scenario, field_name, value)
# scenario.title = "New Automation"
# scenario.status = "review"
# scenario.estimated_hours = 20


# 1.3 Create
class ScenarioDraft:
    pass


scenario = ScenarioDraft()

setattr(scenario, "priority", "high")
print(scenario.priority)
# high


# <--------------hassattr---------------->
field_name = "status"
# getattr(scenario, field_name) - сначала проверка

if hasattr(scenario, field_name):
    value = getattr(scenario, field_name)


# <-------------TRIO----------->
class ScenarioDraft:
    pass


scenario = ScenarioDraft()
scenario.title = "CRM Automation"
scenario.status = "review"

field_name = "status"

if hasattr(scenario, field_name):
    old_value = getattr(scenario, field_name)

    setattr(scenario, field_name, "published")
# hasattr -> есть ли?
# getattr -> дай значение
# setattr -> запиши значение