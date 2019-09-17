import json
import csv

with open('data/attendees/captainCrunch.csv') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    family_Header = ["Name",
    "Phone Number", "Preferred Email",
    "Are you a Staff or Attendee?", "School Affiliation", "T-shirt Size",
    "Preferred Gender Pronouns", "Would you prefer a co-ed room?",
    "Please upload a professional headshot",
    "What's your social media? Facebook",
    "Emergency Contact Full Name",
    "Emergency Contact Phone Number",
    "Emergency Contact Relationship to You"]

    data_structure = {
        "attendees": {}
    }

    def extractHeaders(data):
        headers = list(data.keys())
        print(enumerate(headers))
        question_Num = [2, 3, 5, 6, 7, 10, 12, 16, 18, 26, 27, 28]
        question_Str = []

        for idx, header in enumerate(headers):
            # Uncomment whenever you want to see numbering of questions
            # print(idx, header)
            for i in question_Num:
                if(i == idx):
                    question_Str.append(header)
        return question_Str

    for row in csv_reader:
        if line_count == 0:
            focus_questions = extractHeaders(row)
            line_count += 1
        # for header in focus_questions:
        #     data["attendees"]["steven"] = 5
        student = {}
        for data in row:
            student[data] = row[data]
            data_structure["attendees"][row["Phone Number"]] = student




    with open("data_file.json", "w") as write_file:
        write_file.write(json.dumps(data_structure, indent=4))
