def readfile(file):
    text = []
    with open(file) as f:
        text = f.readlines()

    return text


def replace_chars(text_list):
    new_list = []
    for line in text_list:
        line = line.replace('&', '&amp;')
        line = line.replace(' ', '&nbsp;')
        line = line.replace("'", '&apos;')
        line = line.replace('"', '&quot;')
        line = line.replace('\n', '')
        line = '<p>' + line + '</p>'
        new_list.append(line)
    return new_list


def writefile(text_list):
    with open('output.txt', 'x') as f:
        f.writelines(text_list)


if __name__ == '__main__':
    text_list = readfile('ascii2.txt')
    text_list = replace_chars(text_list)
    writefile(text_list)
