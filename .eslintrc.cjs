module.exports =
{
    root: true,
    env:
    {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions:
    {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures:
        {
            jsx: true
        }
    },
    settings:
    {
        react:
        {
            version: "detect"
        }
    },
    extends:
    [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "prettier"
    ],
    plugins:
    [
        "react",
        "react-hooks",
        "jsx-a11y",
        "import"
    ],
    rules:
    {
        "no-unused-vars":
        [
            "error",
            {
                ignoreRestSiblings: true
            }
        ],
        "eqeqeq":
        [
            "error",
            "always"
        ],
        "import/order":
        [
            "warn",
            {
                "groups":
                [
                    "external",
                    "builtin",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "type"
                ],
                "pathGroups":
                [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes":
                [
                    "react"
                ],
                "newlines-between": "always",
                "alphabetize":
                {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        "react/react-in-jsx-scope": "off",
        "no-console":
        [
            "error",
            {
                "allow":
                [
                    "warn",
                    "error"
                ]
            }
        ],
        "react/prop-types": "off",
        "react/require-default-props": "off"
    },
    ignorePatterns:
    [
        "build/",
        "dist/",
        "node_modules/",
        "**/*.min.js"
    ]
}