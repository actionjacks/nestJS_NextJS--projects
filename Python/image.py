from PIL import Image

img = Image.open('my_file.jpg')
# img.show()

crop_img = img.crop((0, 0, 100, 100))
# crop_img.show()
