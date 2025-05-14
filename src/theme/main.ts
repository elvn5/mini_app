import { theme } from "antd"

export const lightTheme ={
  algorithm: theme.defaultAlgorithm,
    token: {
    colorPrimary: '#00C27A',
    colorBgContainer: '#f0fff4',
    colorBorder: '#d4f5e9',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    borderRadius: 8,
    colorText: '#0c1a0e',
},
  components: {
    Button: {
      controlHeight: 40,
        paddingInline: 20,
        fontWeight: 600,
    },
    Card: {
      colorBgContainer: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
  },
};

export const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#00C27A',
    colorBgContainer: '#1a1a1a',
    colorBorder: '#2a2a2a',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    borderRadius: 8,
    colorText: '#ffffff',
  },
  components: {
    Button: {
      controlHeight: 40,
      paddingInline: 20,
      fontWeight: 600,
    },
    Card: {
      colorBgContainer: '#141414',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
    },
  },
};