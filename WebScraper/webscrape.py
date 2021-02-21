# SDHacks 2021
# 2/21/21 
# 2:16AM
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import by
from bs4 import BeautifulSoup
# import pandas as pd

lines = []
f = open("WebScraper\commonnames.txt", "r")
for line in f:
    lines.append(line)
f.close()

# Scrapes pfaf.org to find optimal ph and temperature levels for each crop
class PFAFScrape:
    def __init__(self):
        self.driver = webdriver.Chrome("C:\Windows\chromedriver.exe")
        self.temp = []
    def parse(self):
        self.driver.get('https://pfaf.org/')
#        for name in cnames:
        for line in lines:
            if line is lines[0]:
                searchbox = self.driver.find_element_by_id('ContentPlaceHolder1_txtSearch')
                searchbox.click()
                searchbox.send_keys(line)
                #search = self.driver.find_element_by_id('ContentPlaceHolder1_imgbtnSearch1')
                #search.click()
                elem = self.driver.find_element_by_xpath('//*[@id="ContentPlaceHolder1_gvresults"]/tbody/tr[2]/td[5]')
                print(elem.text)
            else:
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
                searchbox = self.driver.find_element_by_id('ContentPlaceHolder1_txtword')
                searchbox.click()
                searchbox.clear()
                searchbox.send_keys(line)
                
                #self.driver.find_element_by_name('ctl00$ContentPlaceHolder1$imgbtnSearch').click()
                try:
                    elem = self.driver.find_element_by_xpath('//*[@id="ContentPlaceHolder1_gvresults"]/tbody/tr[2]/td[5]')
                    self.temp.append(elem.text)
                except Exception:
                    self.temp.append("-")
                    continue
                    
p = PFAFScrape()
p.parse()

f = open("WebScraper\degree.txt", "w")
for i in p.temp:
    if i is "-":
        f.write("NULL")
    else:
        mintemp = 10*i.split("-")[0] - 60
        maxtemp = 10*i.split("-")[1] - 50
        f.write(str(mintemp) + "-" + str(maxtemp))
    f.write(i)
f.close()