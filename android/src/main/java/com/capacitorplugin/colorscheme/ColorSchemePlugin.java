package com.capacitorplugin.colorscheme;

import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Handler;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ColorScheme")
public class ColorSchemePlugin extends Plugin
{
    private ColorScheme implementation;
    private PluginCall watchCall;

    @Override
    public void load()
    {
        implementation = new ColorScheme(getActivity());
    }

    @PluginMethod
    public void getScheme(PluginCall call)
    {
        String fallbackScheme = call.getString("fallbackScheme");

        JSObject ret = new JSObject();
        ret.put("scheme", implementation.getScheme(fallbackScheme));
        call.resolve(ret);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchScheme(PluginCall call)  {
        call.setKeepAlive(true);
        watchCall = call;
        getScheme(call);
    }

    @Override
    protected void handleOnConfigurationChanged(Configuration newConfig) {
        getScheme(watchCall);
    }
}
