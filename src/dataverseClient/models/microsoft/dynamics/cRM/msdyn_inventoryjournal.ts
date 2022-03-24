import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_inventoryadjustmentproductFromDiscriminatorValue} from './createMsdyn_inventoryadjustmentproductFromDiscriminatorValue';
import {createMsdyn_inventoryjournalFromDiscriminatorValue} from './createMsdyn_inventoryjournalFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_purchaseorderproductFromDiscriminatorValue} from './createMsdyn_purchaseorderproductFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue';
import {createMsdyn_rmareceiptproductFromDiscriminatorValue} from './createMsdyn_rmareceiptproductFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_inventoryadjustmentproduct, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_purchaseorderproduct, Msdyn_purchaseorderreceiptproduct, Msdyn_rmareceiptproduct, Msdyn_warehouse, Msdyn_workorder, Msdyn_workorderproduct, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_inventoryjournal extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_allocatedtoworkorder_value?: string | undefined;
    private __msdyn_inventoryadjustmentproduct_value?: string | undefined;
    private __msdyn_originatingjournal_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_purchaseorderproduct_value?: string | undefined;
    private __msdyn_purchaseorderreceiptproduct_value?: string | undefined;
    private __msdyn_rmareceiptproduct_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_warehouse_value?: string | undefined;
    private __msdyn_workorderproduct_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_allocatedtoworkorder?: Msdyn_workorder | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_inventoryadjustmentproduct?: Msdyn_inventoryadjustmentproduct | undefined;
    private _msdyn_inventoryjournal_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_inventoryjournal_Annotations?: Annotation[] | undefined;
    private _msdyn_inventoryjournal_Appointments?: Appointment[] | undefined;
    private _msdyn_inventoryjournal_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_inventoryjournal_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_inventoryjournal_connections1?: Connection[] | undefined;
    private _msdyn_inventoryjournal_connections2?: Connection[] | undefined;
    private _msdyn_inventoryjournal_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_inventoryjournal_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_inventoryjournal_Emails?: Email[] | undefined;
    private _msdyn_inventoryjournal_Faxes?: Fax[] | undefined;
    private _msdyn_inventoryjournal_Letters?: Letter[] | undefined;
    private _msdyn_inventoryjournal_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_inventoryjournal_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_inventoryjournal_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_inventoryjournal_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_inventoryjournal_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_inventoryjournal_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_inventoryjournal_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_inventoryjournal_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_inventoryjournal_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_inventoryjournal_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_inventoryjournal_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_inventoryjournal_ProcessSession?: Processsession[] | undefined;
    private _msdyn_inventoryjournal_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_inventoryjournal_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_inventoryjournal_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_inventoryjournal_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_inventoryjournal_Tasks?: Task[] | undefined;
    private _msdyn_inventoryjournalid?: string | undefined;
    private _msdyn_journaltype?: number | undefined;
    private _msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal?: Msdyn_inventoryjournal[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_originatingjournal_msdyn_inventoryjournal?: Msdyn_inventoryjournal | undefined;
    private _msdyn_product?: Product | undefined;
    private _msdyn_purchaseorderproduct?: Msdyn_purchaseorderproduct | undefined;
    private _msdyn_purchaseorderreceiptproduct?: Msdyn_purchaseorderreceiptproduct | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_reversal?: boolean | undefined;
    private _msdyn_rmareceiptproduct?: Msdyn_rmareceiptproduct | undefined;
    private _msdyn_transactiontype?: number | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_warehouse?: Msdyn_warehouse | undefined;
    private _msdyn_workorderproduct?: Msdyn_workorderproduct | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_allocatedtoworkorder_value property value. 
     * @returns a string
     */
    public get _msdyn_allocatedtoworkorder_value() {
        return this.__msdyn_allocatedtoworkorder_value;
    };
    /**
     * Sets the _msdyn_allocatedtoworkorder_value property value. 
     * @param value Value to set for the _msdyn_allocatedtoworkorder_value property.
     */
    public set _msdyn_allocatedtoworkorder_value(value: string | undefined) {
        this.__msdyn_allocatedtoworkorder_value = value;
    };
    /**
     * Gets the _msdyn_inventoryadjustmentproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_inventoryadjustmentproduct_value() {
        return this.__msdyn_inventoryadjustmentproduct_value;
    };
    /**
     * Sets the _msdyn_inventoryadjustmentproduct_value property value. 
     * @param value Value to set for the _msdyn_inventoryadjustmentproduct_value property.
     */
    public set _msdyn_inventoryadjustmentproduct_value(value: string | undefined) {
        this.__msdyn_inventoryadjustmentproduct_value = value;
    };
    /**
     * Gets the _msdyn_originatingjournal_value property value. 
     * @returns a string
     */
    public get _msdyn_originatingjournal_value() {
        return this.__msdyn_originatingjournal_value;
    };
    /**
     * Sets the _msdyn_originatingjournal_value property value. 
     * @param value Value to set for the _msdyn_originatingjournal_value property.
     */
    public set _msdyn_originatingjournal_value(value: string | undefined) {
        this.__msdyn_originatingjournal_value = value;
    };
    /**
     * Gets the _msdyn_product_value property value. 
     * @returns a string
     */
    public get _msdyn_product_value() {
        return this.__msdyn_product_value;
    };
    /**
     * Sets the _msdyn_product_value property value. 
     * @param value Value to set for the _msdyn_product_value property.
     */
    public set _msdyn_product_value(value: string | undefined) {
        this.__msdyn_product_value = value;
    };
    /**
     * Gets the _msdyn_purchaseorderproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_purchaseorderproduct_value() {
        return this.__msdyn_purchaseorderproduct_value;
    };
    /**
     * Sets the _msdyn_purchaseorderproduct_value property value. 
     * @param value Value to set for the _msdyn_purchaseorderproduct_value property.
     */
    public set _msdyn_purchaseorderproduct_value(value: string | undefined) {
        this.__msdyn_purchaseorderproduct_value = value;
    };
    /**
     * Gets the _msdyn_purchaseorderreceiptproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_purchaseorderreceiptproduct_value() {
        return this.__msdyn_purchaseorderreceiptproduct_value;
    };
    /**
     * Sets the _msdyn_purchaseorderreceiptproduct_value property value. 
     * @param value Value to set for the _msdyn_purchaseorderreceiptproduct_value property.
     */
    public set _msdyn_purchaseorderreceiptproduct_value(value: string | undefined) {
        this.__msdyn_purchaseorderreceiptproduct_value = value;
    };
    /**
     * Gets the _msdyn_rmareceiptproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_rmareceiptproduct_value() {
        return this.__msdyn_rmareceiptproduct_value;
    };
    /**
     * Sets the _msdyn_rmareceiptproduct_value property value. 
     * @param value Value to set for the _msdyn_rmareceiptproduct_value property.
     */
    public set _msdyn_rmareceiptproduct_value(value: string | undefined) {
        this.__msdyn_rmareceiptproduct_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
    };
    /**
     * Gets the _msdyn_warehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_warehouse_value() {
        return this.__msdyn_warehouse_value;
    };
    /**
     * Sets the _msdyn_warehouse_value property value. 
     * @param value Value to set for the _msdyn_warehouse_value property.
     */
    public set _msdyn_warehouse_value(value: string | undefined) {
        this.__msdyn_warehouse_value = value;
    };
    /**
     * Gets the _msdyn_workorderproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_workorderproduct_value() {
        return this.__msdyn_workorderproduct_value;
    };
    /**
     * Sets the _msdyn_workorderproduct_value property value. 
     * @param value Value to set for the _msdyn_workorderproduct_value property.
     */
    public set _msdyn_workorderproduct_value(value: string | undefined) {
        this.__msdyn_workorderproduct_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_inventoryjournal and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_allocatedtoworkorder_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_allocatedtoworkorder_value = n.getStringValue(); },
            "_msdyn_inventoryadjustmentproduct_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_inventoryadjustmentproduct_value = n.getStringValue(); },
            "_msdyn_originatingjournal_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_originatingjournal_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_purchaseorderproduct_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_purchaseorderproduct_value = n.getStringValue(); },
            "_msdyn_purchaseorderreceiptproduct_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_purchaseorderreceiptproduct_value = n.getStringValue(); },
            "_msdyn_rmareceiptproduct_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_rmareceiptproduct_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_warehouse_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_warehouse_value = n.getStringValue(); },
            "_msdyn_workorderproduct_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._msdyn_workorderproduct_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_inventoryjournal)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_inventoryjournal).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_inventoryjournal).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_inventoryjournal).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_inventoryjournal).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_inventoryjournal).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_inventoryjournal).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_inventoryjournal).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_allocatedtoworkorder": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_allocatedtoworkorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_internalflags = n.getStringValue(); },
            "msdyn_inventoryadjustmentproduct": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryadjustmentproduct = n.getObjectValue<Msdyn_inventoryadjustmentproduct>(createMsdyn_inventoryadjustmentproductFromDiscriminatorValue); },
            "msdyn_inventoryjournal_ActivityPointers": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_inventoryjournal_Annotations": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_inventoryjournal_Appointments": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_inventoryjournal_AsyncOperations": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_inventoryjournal_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_inventoryjournal_connections1": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_inventoryjournal_connections2": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_inventoryjournal_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_inventoryjournal_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_inventoryjournal_Emails": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_inventoryjournal_Faxes": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_inventoryjournal_Letters": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_inventoryjournal_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msfp_alerts": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_inventoryjournal_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_inventoryjournal_PhoneCalls": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_inventoryjournal_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_inventoryjournal_ProcessSession": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_inventoryjournal_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_inventoryjournal_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_inventoryjournal_SocialActivities": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_inventoryjournal_SyncErrors": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_inventoryjournal_Tasks": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournal_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_inventoryjournalid": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_inventoryjournalid = n.getStringValue(); },
            "msdyn_journaltype": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_journaltype = n.getNumberValue(); },
            "msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal = n.getCollectionOfObjectValues<Msdyn_inventoryjournal>(createMsdyn_inventoryjournalFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_name = n.getStringValue(); },
            "msdyn_originatingjournal_msdyn_inventoryjournal": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_originatingjournal_msdyn_inventoryjournal = n.getObjectValue<Msdyn_inventoryjournal>(createMsdyn_inventoryjournalFromDiscriminatorValue); },
            "msdyn_product": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_purchaseorderproduct = n.getObjectValue<Msdyn_purchaseorderproduct>(createMsdyn_purchaseorderproductFromDiscriminatorValue); },
            "msdyn_purchaseorderreceiptproduct": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_purchaseorderreceiptproduct = n.getObjectValue<Msdyn_purchaseorderreceiptproduct>(createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_quantity = n.getNumberValue(); },
            "msdyn_reversal": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_reversal = n.getBooleanValue(); },
            "msdyn_rmareceiptproduct": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_rmareceiptproduct = n.getObjectValue<Msdyn_rmareceiptproduct>(createMsdyn_rmareceiptproductFromDiscriminatorValue); },
            "msdyn_transactiontype": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_transactiontype = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_warehouse": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_warehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_workorderproduct": (o, n) => { (o as unknown as Msdyn_inventoryjournal).msdyn_workorderproduct = n.getObjectValue<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_inventoryjournal).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_inventoryjournal).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_inventoryjournal).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_inventoryjournal).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_inventoryjournal).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_inventoryjournal).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_inventoryjournal).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_inventoryjournal).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_inventoryjournal).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_inventoryjournal).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_allocatedtoworkorder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_allocatedtoworkorder() {
        return this._msdyn_allocatedtoworkorder;
    };
    /**
     * Sets the msdyn_allocatedtoworkorder property value. 
     * @param value Value to set for the msdyn_allocatedtoworkorder property.
     */
    public set msdyn_allocatedtoworkorder(value: Msdyn_workorder | undefined) {
        this._msdyn_allocatedtoworkorder = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
    };
    /**
     * Gets the msdyn_inventoryadjustmentproduct property value. 
     * @returns a msdyn_inventoryadjustmentproduct
     */
    public get msdyn_inventoryadjustmentproduct() {
        return this._msdyn_inventoryadjustmentproduct;
    };
    /**
     * Sets the msdyn_inventoryadjustmentproduct property value. 
     * @param value Value to set for the msdyn_inventoryadjustmentproduct property.
     */
    public set msdyn_inventoryadjustmentproduct(value: Msdyn_inventoryadjustmentproduct | undefined) {
        this._msdyn_inventoryadjustmentproduct = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_inventoryjournal_ActivityPointers() {
        return this._msdyn_inventoryjournal_ActivityPointers;
    };
    /**
     * Sets the msdyn_inventoryjournal_ActivityPointers property value. 
     * @param value Value to set for the msdyn_inventoryjournal_ActivityPointers property.
     */
    public set msdyn_inventoryjournal_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_inventoryjournal_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_inventoryjournal_Annotations() {
        return this._msdyn_inventoryjournal_Annotations;
    };
    /**
     * Sets the msdyn_inventoryjournal_Annotations property value. 
     * @param value Value to set for the msdyn_inventoryjournal_Annotations property.
     */
    public set msdyn_inventoryjournal_Annotations(value: Annotation[] | undefined) {
        this._msdyn_inventoryjournal_Annotations = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_inventoryjournal_Appointments() {
        return this._msdyn_inventoryjournal_Appointments;
    };
    /**
     * Sets the msdyn_inventoryjournal_Appointments property value. 
     * @param value Value to set for the msdyn_inventoryjournal_Appointments property.
     */
    public set msdyn_inventoryjournal_Appointments(value: Appointment[] | undefined) {
        this._msdyn_inventoryjournal_Appointments = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_inventoryjournal_AsyncOperations() {
        return this._msdyn_inventoryjournal_AsyncOperations;
    };
    /**
     * Sets the msdyn_inventoryjournal_AsyncOperations property value. 
     * @param value Value to set for the msdyn_inventoryjournal_AsyncOperations property.
     */
    public set msdyn_inventoryjournal_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_inventoryjournal_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_inventoryjournal_BulkDeleteFailures() {
        return this._msdyn_inventoryjournal_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_inventoryjournal_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_inventoryjournal_BulkDeleteFailures property.
     */
    public set msdyn_inventoryjournal_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_inventoryjournal_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_inventoryjournal_connections1() {
        return this._msdyn_inventoryjournal_connections1;
    };
    /**
     * Sets the msdyn_inventoryjournal_connections1 property value. 
     * @param value Value to set for the msdyn_inventoryjournal_connections1 property.
     */
    public set msdyn_inventoryjournal_connections1(value: Connection[] | undefined) {
        this._msdyn_inventoryjournal_connections1 = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_inventoryjournal_connections2() {
        return this._msdyn_inventoryjournal_connections2;
    };
    /**
     * Sets the msdyn_inventoryjournal_connections2 property value. 
     * @param value Value to set for the msdyn_inventoryjournal_connections2 property.
     */
    public set msdyn_inventoryjournal_connections2(value: Connection[] | undefined) {
        this._msdyn_inventoryjournal_connections2 = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_inventoryjournal_DuplicateBaseRecord() {
        return this._msdyn_inventoryjournal_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_inventoryjournal_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_inventoryjournal_DuplicateBaseRecord property.
     */
    public set msdyn_inventoryjournal_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_inventoryjournal_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_inventoryjournal_DuplicateMatchingRecord() {
        return this._msdyn_inventoryjournal_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_inventoryjournal_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_inventoryjournal_DuplicateMatchingRecord property.
     */
    public set msdyn_inventoryjournal_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_inventoryjournal_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_Emails property value. 
     * @returns a email
     */
    public get msdyn_inventoryjournal_Emails() {
        return this._msdyn_inventoryjournal_Emails;
    };
    /**
     * Sets the msdyn_inventoryjournal_Emails property value. 
     * @param value Value to set for the msdyn_inventoryjournal_Emails property.
     */
    public set msdyn_inventoryjournal_Emails(value: Email[] | undefined) {
        this._msdyn_inventoryjournal_Emails = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_inventoryjournal_Faxes() {
        return this._msdyn_inventoryjournal_Faxes;
    };
    /**
     * Sets the msdyn_inventoryjournal_Faxes property value. 
     * @param value Value to set for the msdyn_inventoryjournal_Faxes property.
     */
    public set msdyn_inventoryjournal_Faxes(value: Fax[] | undefined) {
        this._msdyn_inventoryjournal_Faxes = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_Letters property value. 
     * @returns a letter
     */
    public get msdyn_inventoryjournal_Letters() {
        return this._msdyn_inventoryjournal_Letters;
    };
    /**
     * Sets the msdyn_inventoryjournal_Letters property value. 
     * @param value Value to set for the msdyn_inventoryjournal_Letters property.
     */
    public set msdyn_inventoryjournal_Letters(value: Letter[] | undefined) {
        this._msdyn_inventoryjournal_Letters = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_inventoryjournal_MailboxTrackingFolders() {
        return this._msdyn_inventoryjournal_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_inventoryjournal_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_inventoryjournal_MailboxTrackingFolders property.
     */
    public set msdyn_inventoryjournal_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_inventoryjournal_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_inventoryjournal_msdyn_approvals() {
        return this._msdyn_inventoryjournal_msdyn_approvals;
    };
    /**
     * Sets the msdyn_inventoryjournal_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msdyn_approvals property.
     */
    public set msdyn_inventoryjournal_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_inventoryjournal_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_inventoryjournal_msdyn_bookingalerts() {
        return this._msdyn_inventoryjournal_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_inventoryjournal_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msdyn_bookingalerts property.
     */
    public set msdyn_inventoryjournal_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_inventoryjournal_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_inventoryjournal_msdyn_ocliveworkitems() {
        return this._msdyn_inventoryjournal_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_inventoryjournal_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msdyn_ocliveworkitems property.
     */
    public set msdyn_inventoryjournal_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_inventoryjournal_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_inventoryjournal_msdyn_ocoutboundmessages() {
        return this._msdyn_inventoryjournal_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_inventoryjournal_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msdyn_ocoutboundmessages property.
     */
    public set msdyn_inventoryjournal_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_inventoryjournal_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_inventoryjournal_msdyn_ocsessions() {
        return this._msdyn_inventoryjournal_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_inventoryjournal_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msdyn_ocsessions property.
     */
    public set msdyn_inventoryjournal_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_inventoryjournal_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_inventoryjournal_msfp_alerts() {
        return this._msdyn_inventoryjournal_msfp_alerts;
    };
    /**
     * Sets the msdyn_inventoryjournal_msfp_alerts property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msfp_alerts property.
     */
    public set msdyn_inventoryjournal_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_inventoryjournal_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_inventoryjournal_msfp_surveyinvites() {
        return this._msdyn_inventoryjournal_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_inventoryjournal_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msfp_surveyinvites property.
     */
    public set msdyn_inventoryjournal_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_inventoryjournal_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_inventoryjournal_msfp_surveyresponses() {
        return this._msdyn_inventoryjournal_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_inventoryjournal_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_inventoryjournal_msfp_surveyresponses property.
     */
    public set msdyn_inventoryjournal_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_inventoryjournal_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_inventoryjournal_PhoneCalls() {
        return this._msdyn_inventoryjournal_PhoneCalls;
    };
    /**
     * Sets the msdyn_inventoryjournal_PhoneCalls property value. 
     * @param value Value to set for the msdyn_inventoryjournal_PhoneCalls property.
     */
    public set msdyn_inventoryjournal_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_inventoryjournal_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_inventoryjournal_PrincipalObjectAttributeAccesses() {
        return this._msdyn_inventoryjournal_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_inventoryjournal_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_inventoryjournal_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_inventoryjournal_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_inventoryjournal_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_inventoryjournal_ProcessSession() {
        return this._msdyn_inventoryjournal_ProcessSession;
    };
    /**
     * Sets the msdyn_inventoryjournal_ProcessSession property value. 
     * @param value Value to set for the msdyn_inventoryjournal_ProcessSession property.
     */
    public set msdyn_inventoryjournal_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_inventoryjournal_ProcessSession = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_inventoryjournal_RecurringAppointmentMasters() {
        return this._msdyn_inventoryjournal_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_inventoryjournal_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_inventoryjournal_RecurringAppointmentMasters property.
     */
    public set msdyn_inventoryjournal_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_inventoryjournal_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_inventoryjournal_ServiceAppointments() {
        return this._msdyn_inventoryjournal_ServiceAppointments;
    };
    /**
     * Sets the msdyn_inventoryjournal_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_inventoryjournal_ServiceAppointments property.
     */
    public set msdyn_inventoryjournal_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_inventoryjournal_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_inventoryjournal_SocialActivities() {
        return this._msdyn_inventoryjournal_SocialActivities;
    };
    /**
     * Sets the msdyn_inventoryjournal_SocialActivities property value. 
     * @param value Value to set for the msdyn_inventoryjournal_SocialActivities property.
     */
    public set msdyn_inventoryjournal_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_inventoryjournal_SocialActivities = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_inventoryjournal_SyncErrors() {
        return this._msdyn_inventoryjournal_SyncErrors;
    };
    /**
     * Sets the msdyn_inventoryjournal_SyncErrors property value. 
     * @param value Value to set for the msdyn_inventoryjournal_SyncErrors property.
     */
    public set msdyn_inventoryjournal_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_inventoryjournal_SyncErrors = value;
    };
    /**
     * Gets the msdyn_inventoryjournal_Tasks property value. 
     * @returns a task
     */
    public get msdyn_inventoryjournal_Tasks() {
        return this._msdyn_inventoryjournal_Tasks;
    };
    /**
     * Sets the msdyn_inventoryjournal_Tasks property value. 
     * @param value Value to set for the msdyn_inventoryjournal_Tasks property.
     */
    public set msdyn_inventoryjournal_Tasks(value: Task[] | undefined) {
        this._msdyn_inventoryjournal_Tasks = value;
    };
    /**
     * Gets the msdyn_inventoryjournalid property value. 
     * @returns a string
     */
    public get msdyn_inventoryjournalid() {
        return this._msdyn_inventoryjournalid;
    };
    /**
     * Sets the msdyn_inventoryjournalid property value. 
     * @param value Value to set for the msdyn_inventoryjournalid property.
     */
    public set msdyn_inventoryjournalid(value: string | undefined) {
        this._msdyn_inventoryjournalid = value;
    };
    /**
     * Gets the msdyn_journaltype property value. 
     * @returns a integer
     */
    public get msdyn_journaltype() {
        return this._msdyn_journaltype;
    };
    /**
     * Sets the msdyn_journaltype property value. 
     * @param value Value to set for the msdyn_journaltype property.
     */
    public set msdyn_journaltype(value: number | undefined) {
        this._msdyn_journaltype = value;
    };
    /**
     * Gets the msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal property value. 
     * @returns a msdyn_inventoryjournal
     */
    public get msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal() {
        return this._msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal;
    };
    /**
     * Sets the msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal property value. 
     * @param value Value to set for the msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal property.
     */
    public set msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal(value: Msdyn_inventoryjournal[] | undefined) {
        this._msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_originatingjournal_msdyn_inventoryjournal property value. 
     * @returns a msdyn_inventoryjournal
     */
    public get msdyn_originatingjournal_msdyn_inventoryjournal() {
        return this._msdyn_originatingjournal_msdyn_inventoryjournal;
    };
    /**
     * Sets the msdyn_originatingjournal_msdyn_inventoryjournal property value. 
     * @param value Value to set for the msdyn_originatingjournal_msdyn_inventoryjournal property.
     */
    public set msdyn_originatingjournal_msdyn_inventoryjournal(value: Msdyn_inventoryjournal | undefined) {
        this._msdyn_originatingjournal_msdyn_inventoryjournal = value;
    };
    /**
     * Gets the msdyn_product property value. 
     * @returns a product
     */
    public get msdyn_product() {
        return this._msdyn_product;
    };
    /**
     * Sets the msdyn_product property value. 
     * @param value Value to set for the msdyn_product property.
     */
    public set msdyn_product(value: Product | undefined) {
        this._msdyn_product = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct property value. 
     * @returns a msdyn_purchaseorderproduct
     */
    public get msdyn_purchaseorderproduct() {
        return this._msdyn_purchaseorderproduct;
    };
    /**
     * Sets the msdyn_purchaseorderproduct property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct property.
     */
    public set msdyn_purchaseorderproduct(value: Msdyn_purchaseorderproduct | undefined) {
        this._msdyn_purchaseorderproduct = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceiptproduct property value. 
     * @returns a msdyn_purchaseorderreceiptproduct
     */
    public get msdyn_purchaseorderreceiptproduct() {
        return this._msdyn_purchaseorderreceiptproduct;
    };
    /**
     * Sets the msdyn_purchaseorderreceiptproduct property value. 
     * @param value Value to set for the msdyn_purchaseorderreceiptproduct property.
     */
    public set msdyn_purchaseorderreceiptproduct(value: Msdyn_purchaseorderreceiptproduct | undefined) {
        this._msdyn_purchaseorderreceiptproduct = value;
    };
    /**
     * Gets the msdyn_quantity property value. 
     * @returns a double
     */
    public get msdyn_quantity() {
        return this._msdyn_quantity;
    };
    /**
     * Sets the msdyn_quantity property value. 
     * @param value Value to set for the msdyn_quantity property.
     */
    public set msdyn_quantity(value: number | undefined) {
        this._msdyn_quantity = value;
    };
    /**
     * Gets the msdyn_reversal property value. 
     * @returns a boolean
     */
    public get msdyn_reversal() {
        return this._msdyn_reversal;
    };
    /**
     * Sets the msdyn_reversal property value. 
     * @param value Value to set for the msdyn_reversal property.
     */
    public set msdyn_reversal(value: boolean | undefined) {
        this._msdyn_reversal = value;
    };
    /**
     * Gets the msdyn_rmareceiptproduct property value. 
     * @returns a msdyn_rmareceiptproduct
     */
    public get msdyn_rmareceiptproduct() {
        return this._msdyn_rmareceiptproduct;
    };
    /**
     * Sets the msdyn_rmareceiptproduct property value. 
     * @param value Value to set for the msdyn_rmareceiptproduct property.
     */
    public set msdyn_rmareceiptproduct(value: Msdyn_rmareceiptproduct | undefined) {
        this._msdyn_rmareceiptproduct = value;
    };
    /**
     * Gets the msdyn_transactiontype property value. 
     * @returns a integer
     */
    public get msdyn_transactiontype() {
        return this._msdyn_transactiontype;
    };
    /**
     * Sets the msdyn_transactiontype property value. 
     * @param value Value to set for the msdyn_transactiontype property.
     */
    public set msdyn_transactiontype(value: number | undefined) {
        this._msdyn_transactiontype = value;
    };
    /**
     * Gets the msdyn_unit property value. 
     * @returns a uom
     */
    public get msdyn_unit() {
        return this._msdyn_unit;
    };
    /**
     * Sets the msdyn_unit property value. 
     * @param value Value to set for the msdyn_unit property.
     */
    public set msdyn_unit(value: Uom | undefined) {
        this._msdyn_unit = value;
    };
    /**
     * Gets the msdyn_warehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_warehouse() {
        return this._msdyn_warehouse;
    };
    /**
     * Sets the msdyn_warehouse property value. 
     * @param value Value to set for the msdyn_warehouse property.
     */
    public set msdyn_warehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_warehouse = value;
    };
    /**
     * Gets the msdyn_workorderproduct property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_workorderproduct() {
        return this._msdyn_workorderproduct;
    };
    /**
     * Sets the msdyn_workorderproduct property value. 
     * @param value Value to set for the msdyn_workorderproduct property.
     */
    public set msdyn_workorderproduct(value: Msdyn_workorderproduct | undefined) {
        this._msdyn_workorderproduct = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_allocatedtoworkorder_value", this._msdyn_allocatedtoworkorder_value);
        writer.writeStringValue("_msdyn_inventoryadjustmentproduct_value", this._msdyn_inventoryadjustmentproduct_value);
        writer.writeStringValue("_msdyn_originatingjournal_value", this._msdyn_originatingjournal_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_purchaseorderproduct_value", this._msdyn_purchaseorderproduct_value);
        writer.writeStringValue("_msdyn_purchaseorderreceiptproduct_value", this._msdyn_purchaseorderreceiptproduct_value);
        writer.writeStringValue("_msdyn_rmareceiptproduct_value", this._msdyn_rmareceiptproduct_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_warehouse_value", this._msdyn_warehouse_value);
        writer.writeStringValue("_msdyn_workorderproduct_value", this._msdyn_workorderproduct_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_allocatedtoworkorder", this.msdyn_allocatedtoworkorder);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeObjectValue<Msdyn_inventoryadjustmentproduct>("msdyn_inventoryadjustmentproduct", this.msdyn_inventoryadjustmentproduct);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_inventoryjournal_ActivityPointers", this.msdyn_inventoryjournal_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_inventoryjournal_Annotations", this.msdyn_inventoryjournal_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_inventoryjournal_Appointments", this.msdyn_inventoryjournal_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_inventoryjournal_AsyncOperations", this.msdyn_inventoryjournal_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_inventoryjournal_BulkDeleteFailures", this.msdyn_inventoryjournal_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_inventoryjournal_connections1", this.msdyn_inventoryjournal_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_inventoryjournal_connections2", this.msdyn_inventoryjournal_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_inventoryjournal_DuplicateBaseRecord", this.msdyn_inventoryjournal_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_inventoryjournal_DuplicateMatchingRecord", this.msdyn_inventoryjournal_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_inventoryjournal_Emails", this.msdyn_inventoryjournal_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_inventoryjournal_Faxes", this.msdyn_inventoryjournal_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_inventoryjournal_Letters", this.msdyn_inventoryjournal_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_inventoryjournal_MailboxTrackingFolders", this.msdyn_inventoryjournal_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_inventoryjournal_msdyn_approvals", this.msdyn_inventoryjournal_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_inventoryjournal_msdyn_bookingalerts", this.msdyn_inventoryjournal_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_inventoryjournal_msdyn_ocliveworkitems", this.msdyn_inventoryjournal_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_inventoryjournal_msdyn_ocoutboundmessages", this.msdyn_inventoryjournal_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_inventoryjournal_msdyn_ocsessions", this.msdyn_inventoryjournal_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_inventoryjournal_msfp_alerts", this.msdyn_inventoryjournal_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_inventoryjournal_msfp_surveyinvites", this.msdyn_inventoryjournal_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_inventoryjournal_msfp_surveyresponses", this.msdyn_inventoryjournal_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_inventoryjournal_PhoneCalls", this.msdyn_inventoryjournal_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_inventoryjournal_PrincipalObjectAttributeAccesses", this.msdyn_inventoryjournal_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_inventoryjournal_ProcessSession", this.msdyn_inventoryjournal_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_inventoryjournal_RecurringAppointmentMasters", this.msdyn_inventoryjournal_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_inventoryjournal_ServiceAppointments", this.msdyn_inventoryjournal_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_inventoryjournal_SocialActivities", this.msdyn_inventoryjournal_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_inventoryjournal_SyncErrors", this.msdyn_inventoryjournal_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_inventoryjournal_Tasks", this.msdyn_inventoryjournal_Tasks);
        writer.writeStringValue("msdyn_inventoryjournalid", this.msdyn_inventoryjournalid);
        writer.writeNumberValue("msdyn_journaltype", this.msdyn_journaltype);
        writer.writeCollectionOfObjectValues<Msdyn_inventoryjournal>("msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal", this.msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_inventoryjournal>("msdyn_originatingjournal_msdyn_inventoryjournal", this.msdyn_originatingjournal_msdyn_inventoryjournal);
        writer.writeObjectValue<Product>("msdyn_product", this.msdyn_product);
        writer.writeObjectValue<Msdyn_purchaseorderproduct>("msdyn_purchaseorderproduct", this.msdyn_purchaseorderproduct);
        writer.writeObjectValue<Msdyn_purchaseorderreceiptproduct>("msdyn_purchaseorderreceiptproduct", this.msdyn_purchaseorderreceiptproduct);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeBooleanValue("msdyn_reversal", this.msdyn_reversal);
        writer.writeObjectValue<Msdyn_rmareceiptproduct>("msdyn_rmareceiptproduct", this.msdyn_rmareceiptproduct);
        writer.writeNumberValue("msdyn_transactiontype", this.msdyn_transactiontype);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_warehouse", this.msdyn_warehouse);
        writer.writeObjectValue<Msdyn_workorderproduct>("msdyn_workorderproduct", this.msdyn_workorderproduct);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
