#https://stackoverflow.com/questions/23894221/upload-file-to-my-dropbox-from-python-script/36851978#36851978
#!/usr/bin/env python
import dropbox
import os
from datetime import date

class TransferData:
    def __init__(self, access_token):
        self.access_token = access_token

    def upload_file(self, file_from, file_to):
        """upload a file to Dropbox using API v2
        """
        dbx = dropbox.Dropbox(self.access_token)

        with open(file_from, 'rb') as f:
            dbx.files_upload(f.read(), file_to)

def main():
    base_dir = '/opt/backups/'
    date_string = date.today().strftime("%b-%d-%Y")


    os.chdir(base_dir)
    mongoexport_cmd =' mongoexport --db book --collection matches --authenticationDatabase=admin   -u ----- -p -----   --out ' + base_dir + date_string
    os.system(mongoexport_cmd)
    zip_cmd ='7z a ' + base_dir + date_string + ".7z  " + base_dir + date_string
    os.system(zip_cmd)
    access_token = '-3YjTimALFoAAAAAAAAGRfYGG21s-wZ-uyMxkgq-WpRm1lnb6LhIyG1dJXNa5Mdo'
    transferData = TransferData(access_token)
    file_from = date.today().strftime("%b-%d-%Y") + ".7z"
    file_to = '/Apps/FootballStats/' +date_string + ".7z"   # The full path to upload the file to, including the file name

    # API v2
    transferData.upload_file(file_from, file_to)


if __name__ == '__main__':
    main()

