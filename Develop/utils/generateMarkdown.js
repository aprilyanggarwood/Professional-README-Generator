const badges = {
  "Apache License 2.0":
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Boost Software License 1.0":
    "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "GNU AGPL v3":
    "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "IBM Public License Version 1.0":
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  "ISC License (ISC)":
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  "The MIT License":
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Mozilla Public License 2.0":
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
};

// function to generate markdown for README

function generateMarkdown(response) {
  return `# ${response.title}
  
# Table of Contents

- [Description](#desicription)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Questions](#questions)



## Description:


${response.description}

## Installation:
${response.installation}

## Usage:

${response.usage}

## Contributing:
${response.contribution}

## Test:
${response.tests}

## License:
- ${badges[response.licenses]}

## Questions:
   If you have any questions about this project, please feel free to contact me through following:
   
   - [My GitHub page](https://github.com/${response.username})

   - My email: <${response.email}>

`;
}
// export generateMarkdown module
module.exports = generateMarkdown;
