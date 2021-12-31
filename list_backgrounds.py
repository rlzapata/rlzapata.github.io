import os

folder_path = 'images/background'
folder_scan = sorted(os.listdir(folder_path))

for image in folder_scan:
    print(image)