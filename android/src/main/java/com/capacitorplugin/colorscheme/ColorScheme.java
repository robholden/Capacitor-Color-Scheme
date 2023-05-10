package com.capacitorplugin.colorscheme;

import android.content.res.Configuration;

import androidx.appcompat.app.AppCompatActivity;

public class ColorScheme
{
    private final AppCompatActivity activity;

    public ColorScheme(AppCompatActivity activity)
    {
        this.activity = activity;
    }

    public String getScheme(String fallbackScheme)
    {
        Boolean isDarkMode = isDarkMode();
        String scheme = isDarkMode == null ? (fallbackScheme == null ? "Unknown" : fallbackScheme) : (isDarkMode ? "Dark" : "Light");
        return scheme;
    }

    public Boolean isDarkMode()
    {
        switch (activity.getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK)
        {
            case Configuration.UI_MODE_NIGHT_YES:
                return true;
            case Configuration.UI_MODE_NIGHT_NO:
                return false;
            default:
                return null;
        }
    }
}
