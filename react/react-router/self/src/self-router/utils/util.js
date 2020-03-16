import resolvePathname from "resolve-pathname";

export function createLocation(path, currentLocation) {
  let location;
  if (typeof path === "string") {
    location = parsePath(path);
  } else {
    location = { ...path };

    if (location.pathname === undefined) location.pathname = "";

    if (location.search) {
      if (location.search.charAt(0) !== "?")
        location.search = "?" + location.search;
    } else {
      location.search = "";
    }
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError(
        'Pathname "' +
          location.pathname +
          '" could not be decoded. ' +
          "This is likely caused by an invalid percent-encoding."
      );
    } else {
      throw e;
    }
  }

  if (currentLocation) {
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== "/") {
      location.pathname = resolvePathname(
        location.pathname,
        currentLocation.pathname
      );
    }
  } else {
    if (!location.pathname) {
      location.pathname = "/";
    }
  }

  return location;
}

function parsePath(path) {
  let pathname = path || "/";
  let search = "";

  const searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname,
    search: search === "?" ? "" : search
  };
}
