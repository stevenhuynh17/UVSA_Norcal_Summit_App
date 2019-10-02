import json
import csv


def writeAgenda():
    with open("data_file.json", "r") as read_file:
        data = json.load(read_file)
        calendar = {
            "agenda": {
                "Saturday": [],
                "Sunday": []
            }
        }

        sample = {
            "title": "Energizers/Ice Breakers",
            "time": "8:30AM - 9:00AM",
            "location": "Outside Student Union Meeting Room",
            "description": "TESTING TESTING"
        }

        calendar.get("agenda").get("Saturday").append(sample)
        data.update(calendar)

        with open("data_file.json", "w") as write_file:
            write_file.write(json.dumps(data, indent=4))
