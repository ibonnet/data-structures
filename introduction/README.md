# Introductions and overview of semester

## End-user research

Assignment:

Consider those who self identify and/or have been diagnosed with alcohol use disorderLinks to an external site. and/or substance use disorderLinks to an external site.. Using the research methods that you typically rely upon, write 3-5 paragraphs to define an application/data visualization end-user that seeks to access information about meetings of Alcoholics AnonymousLinks to an external site.. Invest some time to better understand this community and the support (in the form of data/information) we might be able to offer through better interface and visualization. Elaborate on how these users' needs may differ when planning over various units of time (day, week, year). 

Answer:

As a journalist with a background in communication science, I first search the data from NGOs who work directly with the affected communities. I then look for research papers on the topic, and interview the researchers to have an expert opinion on how the data was gathered and retrieved. Although this might work in my field, I understand that the approach for a data-oriented person might be different.

The map of AA zones is very simple, but it ultimately does serve the final purpose to find meeting locations around Manhattan. I believe that it could be improved by making it more interactive, where the information appears once we scroll over the specific neighborhood. I might also help to have a color code for those neighborhood where there are more meeting points as others, or the ones where people can still join.

Some useful features that could improve this map could be to allow people to write down their preferred zip code, and the nearest meeting points will appear along with the days and times of the meetings. People could also have the option to include the day of the week where they want to attend, and the locations where there are meetings that day will show up.

## "Algorithm" for parsing AA data

Assignment: You will study the structure of an HTML file and write a set of instructions (in narrative form, list form, and/or pseudo code) for parsing that HTML file.

Answer: We are interested in the information that is inside this element:

<table width=“100%” border=“0” cellspacing=“0” cellpadding=“5”> == $0

Inside each <tr style=“margin-bottom=10px”> we will have

<h4> : Location name

<br> : Location address

<span> : If available, add “wheelchair access”

<td <br> > : Meeting day

<td <br> > : Meeting time

<td <br> > : After it says “Meeting type” each category will be in the column for meeting type
  
  
## Parse a "row" of AA data

Assignment: 
  
Using the raw data of the second row of "zone 8", available at:

https://github.com/visualizedata/data-structures/blob/master/aa_source_data.md#raw-data-for-september-14-parsing-exercise

 

Parse this into an array of arrays, where the outer array represents the "row" of the original table. There should be four inner arrays, where each of these arrays should represent a "row" of the new table (repeating the metadata). Do this in an Observable notebook, publish the notebook, and submit the notebook url to complete the assignment. 

Some useful methods: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

The notebook we used in class: 

https://observablehq.com/@aaronxhill/september-14-text-parsing-exercise
  
Answer: https://observablehq.com/@ibonnet/row-of-aa-data
