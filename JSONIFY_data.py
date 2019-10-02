from analysis.writeAgenda import writeAgenda
from analysis.extractFamily import extractFamily
from analysis.extractWkshp import extractWkshp

famMembers = 'data/attendees/captainCrunch.csv'


def assembleJSON():
    extractFamily(famMembers)
    writeAgenda()
    extractWkshp()


assembleJSON()
