"use strict";

/*
 * The Liberty Project
 * Main Website JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    const year =
        document.getElementById("year");


    /*
     * Dynamic Copyright Year
     */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /*
     * Mobile Navigation
     */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle(
                        "active"
                    );

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        /*
         * Close navigation after
         * clicking a navigation link.
         */

        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /*
     * Close mobile menu when
     * clicking outside of it.
     */

    document.addEventListener(
        "click",
        event => {

            if (
                !navLinks ||
                !menuToggle
            ) {
                return;
            }

            if (
                !navLinks.contains(
                    event.target
                ) &&
                !menuToggle.contains(
                    event.target
                )
            ) {

                navLinks.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /*
     * Smooth anchor scrolling
     */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

});
