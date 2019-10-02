import json
import csv


def extractWkshp():
    with open("data_file.json", "r") as read_file:
        data = json.load(read_file)
        workshop = {
            "workshops": {

            }
        }

        sample = {
            "A": {
                "title": "Civic Engagement",
                "time": "10:30am",
                "host": "Steven Huynh",
                "location": 101
            }
        }

        workshop.get("workshops").update(sample)
        data.update(workshop)

        with open("data_file.json", "w") as write_file:
            write_file.write(json.dumps(data, indent=4))
