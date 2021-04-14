print("Hello Uma!")
# Variable and meaningful names
# About String
course = "My favourite programming is Python"
print(len(course))
print(course[0])
print(course[-1])
print(course[0:6])
print(course[0:])
print(course[:10])
print(course[:])
letter = """ Hi Uma,
    I would like to teach computer science to kids.
 Thank you 
 Kind regards,
 Uma
 """
print(letter)
# Escape characters \" \' \n \\
lesson = "Tuesday \n at 5:30pm"
print(lesson)
# Formatted String
first_name = "Uma"
last_name = "Thileepan"
full = first_name + " " + last_name
print(full)
# Can use f or F"{}" to format above concatenated
full = f"{first_name} {last_name}"
print(full)
# Can use any valid expression in {}
print(f"{2 + 2}")
print(F"{len(full)}")
# String Methods
# When you use String methods orginal methos will not be affected
print(course.upper())
print(course.lower())
print(course.title())
trim_example = "    Trim the white space    "
print(trim_example.strip())
# find the index of passing string
print(course.find("pro"))
print(course.replace("p", "j"))
# check true or false to have the passing string
print("pro" in course)
print("swift" not in course)
