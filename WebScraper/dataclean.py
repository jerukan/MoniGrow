# SDHacks 2021
# 2/21/21
# 4:08 AM

#this file will parse through the common and scientific name files, cleaning data and removing duplicates

#this section is used to create two files containing scientific and common crop names
f = open("WebScraper\cropnames.txt", "r")
counter = 0
cnames = []
snames = []
for line in f:
    counter+=1
    if (counter % 6) == 3:
        snames.append(line)
    elif (counter % 6) == 1:
        cnames.append(line)
    else:
        continue
f.close()

f = open('WebScraper\scientificnames.txt', "w")
for name in snames:
    f.write(name)
f.close()
f = open("WebScraper\commonnames.txt", "w")
for name in cnames:
    f.write(name)
f.close()

#Step 1: removing duplicates and bad data info
lines = []
removal = []
indices = []
save = []
f = open("WebScraper\commonnames.txt", "r")
for line in f:
    lines.append(line)
f.close()
counter = 0
f = open("WebScraper\commonnames.txt", "r")
for line in f:
    counter+=1
    if "for " in line:
        removal.append(line)
        indices.append(counter)
    elif "(" in line:
        removal.append(line)
        indices.append(counter)
    elif " and " in line:
        removal.append(line)
        lines.append(line.split(" and ")[0] + '\n')
        indices.append(counter)
        save.append(counter)
    elif "," in line:
        removal.append(line)
        lines.append(line.split(", ")[0] + '\n')
        indices.append(counter)
        save.append(counter)
    elif "dry " in line:
        removal.append(line)
        lines.append(line.split("ry ")[1] + '\n')
        indices.append(counter)
        save.append(counter)
    elif " or " in line:
        removal.append(line)
        lines.append(line.split(" or ")[0] + '\n')
        indices.append(counter)
        save.append(counter)
    elif "seed" in line:
        removal.append(line)
        lines.append(line.split(" see")[0] + '\n')
        indices.append(counter)
        save.append(counter)
f.close()
f = open("WebScraper\commonnames.txt", "w")
for line in lines:
    if line in removal:
        continue
    else:
        f.write(line)
f.close()
savelines = []
slines = []
f = open('WebScraper\scientificnames.txt', "r")
counter = 0
for line in f:
    counter += 1
    if counter in indices:
        if counter in save:
            savelines.append(line)
        continue
    else: 
        slines.append(line)
f.close()
f = open('WebScraper\scientificnames.txt', "w")
for line in slines:
    f.write(line)
for line in savelines:
    f.write(line)
f.close()

uniques = []
index = []
counter = 0
morelines = []
f = open("WebScraper\commonnames.txt", "r")
for line in f:
    counter += 1
    if line in uniques:
        index.append(counter)
        continue
    else:
        uniques.append(line)
f.close()

f = open("WebScraper\commonnames.txt", "w")
for line in uniques:
    f.write(line)
f.close()

f = open("WebScraper\scientificnames.txt", "r")
counter = 0
for line in f:
    morelines.append(line)
f.close()

f = open("WebScraper\scientificnames.txt", "w")
counter = 0
for line in morelines:
    counter += 1
    if counter in index:
        continue
    else:
        f.write(line)
f.close()
