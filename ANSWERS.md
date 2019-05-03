1.  PropTypes are used to check the data that is coming in to each component.
It is a way to check for erros.  Its important to check the data so we know
we have the right data flowing through the components.

2.  The 3 basic phases are mounting, updating, unmounting.  
Mounting phase is component that is built, initialed data access in constructor,
render is invoked, and componentDidMount is called.
Updating - setState is used to change states data and forcing render. shouldCompoentUpdate is used to stop render if unnecessary.
UnmountingPhase - component removed from screen. ComponentWillUnmount called for clean up.

3. HOCs are an advanced react pattern for designing components that share behavior or data.  Gives us ability to share functionality.

4.  Components can be styled using CSS, a preprocessor like SASS or using styled
components.  Styled components is prob the most practical if the comps are going
to be used a lot throughout the application.  You can also write javascript in styled components which make more dynamic.  
