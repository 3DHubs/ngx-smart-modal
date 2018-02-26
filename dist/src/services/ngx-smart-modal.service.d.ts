import { NgxSmartModalComponent } from '../components/ngx-smart-modal.component';
import { ModalInstance } from './modal-instance';
export declare class NgxSmartModalService {
    modalStack: ModalInstance[];
    private debouncer;
    /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param modalInstance The object that contains the given modal identifier and the modal itself.
     * @param force Optional parameter that forces the overriding of modal instance if it already exists.
     * @returns Returns nothing special.
     */
    addModal(modalInstance: ModalInstance, force?: boolean): void;
    /**
     * Retrieve a modal instance by its identifier.
     *
     * @param id The modal identifier used at creation time.
     */
    getModal(id: string): NgxSmartModalComponent;
    /**
     * Retrieve all the created modals.
     *
     * @returns Returns an array that contains all modal instances.
     */
    getModalStack(): ModalInstance[];
    /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @returns Returns an array that contains all the opened modals.
     */
    getOpenedModals(): ModalInstance[];
    /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @returns Returns a higher index from all the existing modal instances.
     */
    getHigherIndex(): number;
    /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @returns Returns the number of modal instances.
     */
    getModalStackCount(): number;
    /**
     * Remove a modal instance from the modal stack.
     *
     * @param id The modal identifier.
     * @returns Returns the removed modal instance.
     */
    removeModal(id: string): void;
    /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param data The data you want to associate to the modal.
     * @param id The modal identifier.
     * @param force If true, overrides the previous stored data if there was.
     * @returns Returns true if the given modal exists and the process has been tried, either false.
     */
    setModalData(data: any, id: string, force?: boolean): boolean;
    /**
     * Retrieve modal data by its identifier.
     *
     * @param id The modal identifier used at creation time.
     * @returns Returns the associated modal data.
     */
    getModalData(id: string): any;
    /**
     * Reset the data attached to a given modal.
     *
     * @param id The modal identifier used at creation time.
     * @returns Returns the removed data or false if modal doesn't exist.
     */
    resetModalData(id: string): any | boolean;
    /**
     * Close the latest opened modal if it has been declared as escapeAble
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     */
    closeLatestModal(): void;
}
