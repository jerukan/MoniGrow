# SDHacks 2021
# 2/21/21 
# 2:16AM

# from selenium import webdriver
# from selenium.webdriver.common.by import by
# from bs4 import BeautifulSoup
# import pandas as pd

# this section is used to create a file contining a set of botanical crop names
# f = open("WebScraper\cropnames.txt", "r")
# counter = 0
# bnames = []
# for line in f:
#     counter+=1
#     if (counter % 6) == 3:
#         print(line)
#         bnames.append(line)
#     else:
#         continue
# f.close()

# f = open('WebScraper\scientificnames.txt', "w")
# for name in bnames:
#     f.write(name)
# f.close()


# #this section is used to create a file containing a set of common crop names
# f = open("WebScraper\cropnames.txt", "r")
# counter = 0
# names = []
# for line in f:
#     counter+=1
#     if (counter % 6) == 1:
#         print(line)
#         names.append(line)
#     else:
#         continue
# f.close()

f = open("WebScraper\commonnames.txt", "w")
for name in names:
    f.write(name)
f.close()

class PFAFScrape:
    def __init__(self):
        self.driver - webdriver.Chrome("C:\Windows\chromedriver.exe")

    def login(self):
        self.driver.get('https://pfaf.org/')
    