import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_inventoryjournalFromDiscriminatorValue} from './createMsdyn_inventoryjournalFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_purchaseorderFromDiscriminatorValue} from './createMsdyn_purchaseorderFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
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
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_inventoryjournal, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_purchaseorder, Msdyn_purchaseorderreceiptproduct, Msdyn_warehouse, Msdyn_workorder, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_purchaseorderproduct extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_associatetobooking_value?: string | undefined;
    private __msdyn_associatetowarehouse_value?: string | undefined;
    private __msdyn_associatetoworkorder_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_purchaseorder_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_associatetobooking?: Bookableresourcebooking | undefined;
    private _msdyn_associatetowarehouse?: Msdyn_warehouse | undefined;
    private _msdyn_associatetoworkorder?: Msdyn_workorder | undefined;
    private _msdyn_dateexpected?: Date | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_isordered?: boolean | undefined;
    private _msdyn_itemstatus?: number | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct?: Msdyn_inventoryjournal[] | undefined;
    private _msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct?: Msdyn_purchaseorderreceiptproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_product?: Product | undefined;
    private _msdyn_purchaseorder?: Msdyn_purchaseorder | undefined;
    private _msdyn_purchaseorderproduct_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_purchaseorderproduct_Annotations?: Annotation[] | undefined;
    private _msdyn_purchaseorderproduct_Appointments?: Appointment[] | undefined;
    private _msdyn_purchaseorderproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_purchaseorderproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_purchaseorderproduct_connections1?: Connection[] | undefined;
    private _msdyn_purchaseorderproduct_connections2?: Connection[] | undefined;
    private _msdyn_purchaseorderproduct_Emails?: Email[] | undefined;
    private _msdyn_purchaseorderproduct_Faxes?: Fax[] | undefined;
    private _msdyn_purchaseorderproduct_Letters?: Letter[] | undefined;
    private _msdyn_purchaseorderproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_purchaseorderproduct_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_purchaseorderproduct_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_purchaseorderproduct_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_purchaseorderproduct_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_purchaseorderproduct_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_purchaseorderproduct_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_purchaseorderproduct_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_purchaseorderproduct_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_purchaseorderproduct_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_purchaseorderproduct_ProcessSession?: Processsession[] | undefined;
    private _msdyn_purchaseorderproduct_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_purchaseorderproduct_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_purchaseorderproduct_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_purchaseorderproduct_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_purchaseorderproduct_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_purchaseorderproduct_Tasks?: Task[] | undefined;
    private _msdyn_purchaseorderproductid?: string | undefined;
    private _msdyn_qtybilled?: number | undefined;
    private _msdyn_qtyreceived?: number | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_totalcost?: number | undefined;
    private _msdyn_totalcost_base?: number | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_unitcost?: number | undefined;
    private _msdyn_unitcost_base?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_associatetobooking_value property value. 
     * @returns a string
     */
    public get _msdyn_associatetobooking_value() {
        return this.__msdyn_associatetobooking_value;
    };
    /**
     * Sets the _msdyn_associatetobooking_value property value. 
     * @param value Value to set for the _msdyn_associatetobooking_value property.
     */
    public set _msdyn_associatetobooking_value(value: string | undefined) {
        this.__msdyn_associatetobooking_value = value;
    };
    /**
     * Gets the _msdyn_associatetowarehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_associatetowarehouse_value() {
        return this.__msdyn_associatetowarehouse_value;
    };
    /**
     * Sets the _msdyn_associatetowarehouse_value property value. 
     * @param value Value to set for the _msdyn_associatetowarehouse_value property.
     */
    public set _msdyn_associatetowarehouse_value(value: string | undefined) {
        this.__msdyn_associatetowarehouse_value = value;
    };
    /**
     * Gets the _msdyn_associatetoworkorder_value property value. 
     * @returns a string
     */
    public get _msdyn_associatetoworkorder_value() {
        return this.__msdyn_associatetoworkorder_value;
    };
    /**
     * Sets the _msdyn_associatetoworkorder_value property value. 
     * @param value Value to set for the _msdyn_associatetoworkorder_value property.
     */
    public set _msdyn_associatetoworkorder_value(value: string | undefined) {
        this.__msdyn_associatetoworkorder_value = value;
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
     * Gets the _msdyn_purchaseorder_value property value. 
     * @returns a string
     */
    public get _msdyn_purchaseorder_value() {
        return this.__msdyn_purchaseorder_value;
    };
    /**
     * Sets the _msdyn_purchaseorder_value property value. 
     * @param value Value to set for the _msdyn_purchaseorder_value property.
     */
    public set _msdyn_purchaseorder_value(value: string | undefined) {
        this.__msdyn_purchaseorder_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new msdyn_purchaseorderproduct and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_associatetobooking_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._msdyn_associatetobooking_value = n.getStringValue(); },
            "_msdyn_associatetowarehouse_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._msdyn_associatetowarehouse_value = n.getStringValue(); },
            "_msdyn_associatetoworkorder_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._msdyn_associatetoworkorder_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_purchaseorder_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._msdyn_purchaseorder_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._msdyn_unit_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_associatetobooking": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_associatetobooking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_associatetowarehouse": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_associatetowarehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_associatetoworkorder": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_associatetoworkorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_dateexpected": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_dateexpected = n.getDateValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_description = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_internalflags = n.getStringValue(); },
            "msdyn_isordered": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_isordered = n.getBooleanValue(); },
            "msdyn_itemstatus": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_itemstatus = n.getNumberValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct = n.getCollectionOfObjectValues<Msdyn_inventoryjournal>(createMsdyn_inventoryjournalFromDiscriminatorValue); },
            "msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct = n.getCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>(createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_name = n.getStringValue(); },
            "msdyn_product": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_purchaseorder": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorder = n.getObjectValue<Msdyn_purchaseorder>(createMsdyn_purchaseorderFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_ActivityPointers": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_Annotations": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_Appointments": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_AsyncOperations": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_connections1": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_connections2": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_Emails": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_Faxes": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_Letters": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msfp_alerts": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_PhoneCalls": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_ProcessSession": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_SocialActivities": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_SyncErrors": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_purchaseorderproduct_Tasks": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproduct_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_purchaseorderproductid": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_purchaseorderproductid = n.getStringValue(); },
            "msdyn_qtybilled": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_qtybilled = n.getNumberValue(); },
            "msdyn_qtyreceived": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_qtyreceived = n.getNumberValue(); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_quantity = n.getNumberValue(); },
            "msdyn_totalcost": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_totalcost = n.getNumberValue(); },
            "msdyn_totalcost_base": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_totalcost_base = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitcost": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_unitcost = n.getNumberValue(); },
            "msdyn_unitcost_base": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).msdyn_unitcost_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_purchaseorderproduct).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_associatetobooking property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_associatetobooking() {
        return this._msdyn_associatetobooking;
    };
    /**
     * Sets the msdyn_associatetobooking property value. 
     * @param value Value to set for the msdyn_associatetobooking property.
     */
    public set msdyn_associatetobooking(value: Bookableresourcebooking | undefined) {
        this._msdyn_associatetobooking = value;
    };
    /**
     * Gets the msdyn_associatetowarehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_associatetowarehouse() {
        return this._msdyn_associatetowarehouse;
    };
    /**
     * Sets the msdyn_associatetowarehouse property value. 
     * @param value Value to set for the msdyn_associatetowarehouse property.
     */
    public set msdyn_associatetowarehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_associatetowarehouse = value;
    };
    /**
     * Gets the msdyn_associatetoworkorder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_associatetoworkorder() {
        return this._msdyn_associatetoworkorder;
    };
    /**
     * Sets the msdyn_associatetoworkorder property value. 
     * @param value Value to set for the msdyn_associatetoworkorder property.
     */
    public set msdyn_associatetoworkorder(value: Msdyn_workorder | undefined) {
        this._msdyn_associatetoworkorder = value;
    };
    /**
     * Gets the msdyn_dateexpected property value. 
     * @returns a Date
     */
    public get msdyn_dateexpected() {
        return this._msdyn_dateexpected;
    };
    /**
     * Sets the msdyn_dateexpected property value. 
     * @param value Value to set for the msdyn_dateexpected property.
     */
    public set msdyn_dateexpected(value: Date | undefined) {
        this._msdyn_dateexpected = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
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
     * Gets the msdyn_isordered property value. 
     * @returns a boolean
     */
    public get msdyn_isordered() {
        return this._msdyn_isordered;
    };
    /**
     * Sets the msdyn_isordered property value. 
     * @param value Value to set for the msdyn_isordered property.
     */
    public set msdyn_isordered(value: boolean | undefined) {
        this._msdyn_isordered = value;
    };
    /**
     * Gets the msdyn_itemstatus property value. 
     * @returns a integer
     */
    public get msdyn_itemstatus() {
        return this._msdyn_itemstatus;
    };
    /**
     * Sets the msdyn_itemstatus property value. 
     * @param value Value to set for the msdyn_itemstatus property.
     */
    public set msdyn_itemstatus(value: number | undefined) {
        this._msdyn_itemstatus = value;
    };
    /**
     * Gets the msdyn_lineorder property value. 
     * @returns a integer
     */
    public get msdyn_lineorder() {
        return this._msdyn_lineorder;
    };
    /**
     * Sets the msdyn_lineorder property value. 
     * @param value Value to set for the msdyn_lineorder property.
     */
    public set msdyn_lineorder(value: number | undefined) {
        this._msdyn_lineorder = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct property value. 
     * @returns a msdyn_inventoryjournal
     */
    public get msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct() {
        return this._msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct property.
     */
    public set msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct(value: Msdyn_inventoryjournal[] | undefined) {
        this._msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct property value. 
     * @returns a msdyn_purchaseorderreceiptproduct
     */
    public get msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct() {
        return this._msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct property.
     */
    public set msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct(value: Msdyn_purchaseorderreceiptproduct[] | undefined) {
        this._msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct = value;
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
     * Gets the msdyn_purchaseorder property value. 
     * @returns a msdyn_purchaseorder
     */
    public get msdyn_purchaseorder() {
        return this._msdyn_purchaseorder;
    };
    /**
     * Sets the msdyn_purchaseorder property value. 
     * @param value Value to set for the msdyn_purchaseorder property.
     */
    public set msdyn_purchaseorder(value: Msdyn_purchaseorder | undefined) {
        this._msdyn_purchaseorder = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_purchaseorderproduct_ActivityPointers() {
        return this._msdyn_purchaseorderproduct_ActivityPointers;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_ActivityPointers property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_ActivityPointers property.
     */
    public set msdyn_purchaseorderproduct_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_purchaseorderproduct_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_purchaseorderproduct_Annotations() {
        return this._msdyn_purchaseorderproduct_Annotations;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_Annotations property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_Annotations property.
     */
    public set msdyn_purchaseorderproduct_Annotations(value: Annotation[] | undefined) {
        this._msdyn_purchaseorderproduct_Annotations = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_purchaseorderproduct_Appointments() {
        return this._msdyn_purchaseorderproduct_Appointments;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_Appointments property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_Appointments property.
     */
    public set msdyn_purchaseorderproduct_Appointments(value: Appointment[] | undefined) {
        this._msdyn_purchaseorderproduct_Appointments = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_purchaseorderproduct_AsyncOperations() {
        return this._msdyn_purchaseorderproduct_AsyncOperations;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_AsyncOperations property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_AsyncOperations property.
     */
    public set msdyn_purchaseorderproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_purchaseorderproduct_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_purchaseorderproduct_BulkDeleteFailures() {
        return this._msdyn_purchaseorderproduct_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_BulkDeleteFailures property.
     */
    public set msdyn_purchaseorderproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_purchaseorderproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_purchaseorderproduct_connections1() {
        return this._msdyn_purchaseorderproduct_connections1;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_connections1 property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_connections1 property.
     */
    public set msdyn_purchaseorderproduct_connections1(value: Connection[] | undefined) {
        this._msdyn_purchaseorderproduct_connections1 = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_purchaseorderproduct_connections2() {
        return this._msdyn_purchaseorderproduct_connections2;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_connections2 property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_connections2 property.
     */
    public set msdyn_purchaseorderproduct_connections2(value: Connection[] | undefined) {
        this._msdyn_purchaseorderproduct_connections2 = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_Emails property value. 
     * @returns a email
     */
    public get msdyn_purchaseorderproduct_Emails() {
        return this._msdyn_purchaseorderproduct_Emails;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_Emails property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_Emails property.
     */
    public set msdyn_purchaseorderproduct_Emails(value: Email[] | undefined) {
        this._msdyn_purchaseorderproduct_Emails = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_purchaseorderproduct_Faxes() {
        return this._msdyn_purchaseorderproduct_Faxes;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_Faxes property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_Faxes property.
     */
    public set msdyn_purchaseorderproduct_Faxes(value: Fax[] | undefined) {
        this._msdyn_purchaseorderproduct_Faxes = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_Letters property value. 
     * @returns a letter
     */
    public get msdyn_purchaseorderproduct_Letters() {
        return this._msdyn_purchaseorderproduct_Letters;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_Letters property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_Letters property.
     */
    public set msdyn_purchaseorderproduct_Letters(value: Letter[] | undefined) {
        this._msdyn_purchaseorderproduct_Letters = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_purchaseorderproduct_MailboxTrackingFolders() {
        return this._msdyn_purchaseorderproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_MailboxTrackingFolders property.
     */
    public set msdyn_purchaseorderproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_purchaseorderproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_purchaseorderproduct_msdyn_approvals() {
        return this._msdyn_purchaseorderproduct_msdyn_approvals;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msdyn_approvals property.
     */
    public set msdyn_purchaseorderproduct_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_purchaseorderproduct_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_purchaseorderproduct_msdyn_bookingalerts() {
        return this._msdyn_purchaseorderproduct_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msdyn_bookingalerts property.
     */
    public set msdyn_purchaseorderproduct_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_purchaseorderproduct_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_purchaseorderproduct_msdyn_ocliveworkitems() {
        return this._msdyn_purchaseorderproduct_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msdyn_ocliveworkitems property.
     */
    public set msdyn_purchaseorderproduct_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_purchaseorderproduct_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_purchaseorderproduct_msdyn_ocoutboundmessages() {
        return this._msdyn_purchaseorderproduct_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msdyn_ocoutboundmessages property.
     */
    public set msdyn_purchaseorderproduct_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_purchaseorderproduct_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_purchaseorderproduct_msdyn_ocsessions() {
        return this._msdyn_purchaseorderproduct_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msdyn_ocsessions property.
     */
    public set msdyn_purchaseorderproduct_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_purchaseorderproduct_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_purchaseorderproduct_msfp_alerts() {
        return this._msdyn_purchaseorderproduct_msfp_alerts;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msfp_alerts property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msfp_alerts property.
     */
    public set msdyn_purchaseorderproduct_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_purchaseorderproduct_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_purchaseorderproduct_msfp_surveyinvites() {
        return this._msdyn_purchaseorderproduct_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msfp_surveyinvites property.
     */
    public set msdyn_purchaseorderproduct_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_purchaseorderproduct_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_purchaseorderproduct_msfp_surveyresponses() {
        return this._msdyn_purchaseorderproduct_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_msfp_surveyresponses property.
     */
    public set msdyn_purchaseorderproduct_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_purchaseorderproduct_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_purchaseorderproduct_PhoneCalls() {
        return this._msdyn_purchaseorderproduct_PhoneCalls;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_PhoneCalls property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_PhoneCalls property.
     */
    public set msdyn_purchaseorderproduct_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_purchaseorderproduct_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses() {
        return this._msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_purchaseorderproduct_ProcessSession() {
        return this._msdyn_purchaseorderproduct_ProcessSession;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_ProcessSession property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_ProcessSession property.
     */
    public set msdyn_purchaseorderproduct_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_purchaseorderproduct_ProcessSession = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_purchaseorderproduct_RecurringAppointmentMasters() {
        return this._msdyn_purchaseorderproduct_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_RecurringAppointmentMasters property.
     */
    public set msdyn_purchaseorderproduct_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_purchaseorderproduct_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_purchaseorderproduct_ServiceAppointments() {
        return this._msdyn_purchaseorderproduct_ServiceAppointments;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_ServiceAppointments property.
     */
    public set msdyn_purchaseorderproduct_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_purchaseorderproduct_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_purchaseorderproduct_SharePointDocumentLocations() {
        return this._msdyn_purchaseorderproduct_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_SharePointDocumentLocations property.
     */
    public set msdyn_purchaseorderproduct_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_purchaseorderproduct_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_purchaseorderproduct_SocialActivities() {
        return this._msdyn_purchaseorderproduct_SocialActivities;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_SocialActivities property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_SocialActivities property.
     */
    public set msdyn_purchaseorderproduct_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_purchaseorderproduct_SocialActivities = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_purchaseorderproduct_SyncErrors() {
        return this._msdyn_purchaseorderproduct_SyncErrors;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_SyncErrors property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_SyncErrors property.
     */
    public set msdyn_purchaseorderproduct_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_purchaseorderproduct_SyncErrors = value;
    };
    /**
     * Gets the msdyn_purchaseorderproduct_Tasks property value. 
     * @returns a task
     */
    public get msdyn_purchaseorderproduct_Tasks() {
        return this._msdyn_purchaseorderproduct_Tasks;
    };
    /**
     * Sets the msdyn_purchaseorderproduct_Tasks property value. 
     * @param value Value to set for the msdyn_purchaseorderproduct_Tasks property.
     */
    public set msdyn_purchaseorderproduct_Tasks(value: Task[] | undefined) {
        this._msdyn_purchaseorderproduct_Tasks = value;
    };
    /**
     * Gets the msdyn_purchaseorderproductid property value. 
     * @returns a string
     */
    public get msdyn_purchaseorderproductid() {
        return this._msdyn_purchaseorderproductid;
    };
    /**
     * Sets the msdyn_purchaseorderproductid property value. 
     * @param value Value to set for the msdyn_purchaseorderproductid property.
     */
    public set msdyn_purchaseorderproductid(value: string | undefined) {
        this._msdyn_purchaseorderproductid = value;
    };
    /**
     * Gets the msdyn_qtybilled property value. 
     * @returns a double
     */
    public get msdyn_qtybilled() {
        return this._msdyn_qtybilled;
    };
    /**
     * Sets the msdyn_qtybilled property value. 
     * @param value Value to set for the msdyn_qtybilled property.
     */
    public set msdyn_qtybilled(value: number | undefined) {
        this._msdyn_qtybilled = value;
    };
    /**
     * Gets the msdyn_qtyreceived property value. 
     * @returns a double
     */
    public get msdyn_qtyreceived() {
        return this._msdyn_qtyreceived;
    };
    /**
     * Sets the msdyn_qtyreceived property value. 
     * @param value Value to set for the msdyn_qtyreceived property.
     */
    public set msdyn_qtyreceived(value: number | undefined) {
        this._msdyn_qtyreceived = value;
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
     * Gets the msdyn_totalcost property value. 
     * @returns a int64
     */
    public get msdyn_totalcost() {
        return this._msdyn_totalcost;
    };
    /**
     * Sets the msdyn_totalcost property value. 
     * @param value Value to set for the msdyn_totalcost property.
     */
    public set msdyn_totalcost(value: number | undefined) {
        this._msdyn_totalcost = value;
    };
    /**
     * Gets the msdyn_totalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_totalcost_base() {
        return this._msdyn_totalcost_base;
    };
    /**
     * Sets the msdyn_totalcost_base property value. 
     * @param value Value to set for the msdyn_totalcost_base property.
     */
    public set msdyn_totalcost_base(value: number | undefined) {
        this._msdyn_totalcost_base = value;
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
     * Gets the msdyn_unitcost property value. 
     * @returns a int64
     */
    public get msdyn_unitcost() {
        return this._msdyn_unitcost;
    };
    /**
     * Sets the msdyn_unitcost property value. 
     * @param value Value to set for the msdyn_unitcost property.
     */
    public set msdyn_unitcost(value: number | undefined) {
        this._msdyn_unitcost = value;
    };
    /**
     * Gets the msdyn_unitcost_base property value. 
     * @returns a int64
     */
    public get msdyn_unitcost_base() {
        return this._msdyn_unitcost_base;
    };
    /**
     * Sets the msdyn_unitcost_base property value. 
     * @param value Value to set for the msdyn_unitcost_base property.
     */
    public set msdyn_unitcost_base(value: number | undefined) {
        this._msdyn_unitcost_base = value;
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
        writer.writeStringValue("_msdyn_associatetobooking_value", this._msdyn_associatetobooking_value);
        writer.writeStringValue("_msdyn_associatetowarehouse_value", this._msdyn_associatetowarehouse_value);
        writer.writeStringValue("_msdyn_associatetoworkorder_value", this._msdyn_associatetoworkorder_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_purchaseorder_value", this._msdyn_purchaseorder_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_associatetobooking", this.msdyn_associatetobooking);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_associatetowarehouse", this.msdyn_associatetowarehouse);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_associatetoworkorder", this.msdyn_associatetoworkorder);
        writer.writeDateValue("msdyn_dateexpected", this.msdyn_dateexpected);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeBooleanValue("msdyn_isordered", this.msdyn_isordered);
        writer.writeNumberValue("msdyn_itemstatus", this.msdyn_itemstatus);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Msdyn_inventoryjournal>("msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct", this.msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>("msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct", this.msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Product>("msdyn_product", this.msdyn_product);
        writer.writeObjectValue<Msdyn_purchaseorder>("msdyn_purchaseorder", this.msdyn_purchaseorder);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_purchaseorderproduct_ActivityPointers", this.msdyn_purchaseorderproduct_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_purchaseorderproduct_Annotations", this.msdyn_purchaseorderproduct_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_purchaseorderproduct_Appointments", this.msdyn_purchaseorderproduct_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_purchaseorderproduct_AsyncOperations", this.msdyn_purchaseorderproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_purchaseorderproduct_BulkDeleteFailures", this.msdyn_purchaseorderproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_purchaseorderproduct_connections1", this.msdyn_purchaseorderproduct_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_purchaseorderproduct_connections2", this.msdyn_purchaseorderproduct_connections2);
        writer.writeCollectionOfObjectValues<Email>("msdyn_purchaseorderproduct_Emails", this.msdyn_purchaseorderproduct_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_purchaseorderproduct_Faxes", this.msdyn_purchaseorderproduct_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_purchaseorderproduct_Letters", this.msdyn_purchaseorderproduct_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_purchaseorderproduct_MailboxTrackingFolders", this.msdyn_purchaseorderproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_purchaseorderproduct_msdyn_approvals", this.msdyn_purchaseorderproduct_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_purchaseorderproduct_msdyn_bookingalerts", this.msdyn_purchaseorderproduct_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_purchaseorderproduct_msdyn_ocliveworkitems", this.msdyn_purchaseorderproduct_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_purchaseorderproduct_msdyn_ocoutboundmessages", this.msdyn_purchaseorderproduct_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_purchaseorderproduct_msdyn_ocsessions", this.msdyn_purchaseorderproduct_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_purchaseorderproduct_msfp_alerts", this.msdyn_purchaseorderproduct_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_purchaseorderproduct_msfp_surveyinvites", this.msdyn_purchaseorderproduct_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_purchaseorderproduct_msfp_surveyresponses", this.msdyn_purchaseorderproduct_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_purchaseorderproduct_PhoneCalls", this.msdyn_purchaseorderproduct_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses", this.msdyn_purchaseorderproduct_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_purchaseorderproduct_ProcessSession", this.msdyn_purchaseorderproduct_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_purchaseorderproduct_RecurringAppointmentMasters", this.msdyn_purchaseorderproduct_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_purchaseorderproduct_ServiceAppointments", this.msdyn_purchaseorderproduct_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_purchaseorderproduct_SharePointDocumentLocations", this.msdyn_purchaseorderproduct_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_purchaseorderproduct_SocialActivities", this.msdyn_purchaseorderproduct_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_purchaseorderproduct_SyncErrors", this.msdyn_purchaseorderproduct_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_purchaseorderproduct_Tasks", this.msdyn_purchaseorderproduct_Tasks);
        writer.writeStringValue("msdyn_purchaseorderproductid", this.msdyn_purchaseorderproductid);
        writer.writeNumberValue("msdyn_qtybilled", this.msdyn_qtybilled);
        writer.writeNumberValue("msdyn_qtyreceived", this.msdyn_qtyreceived);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeNumberValue("msdyn_totalcost", this.msdyn_totalcost);
        writer.writeNumberValue("msdyn_totalcost_base", this.msdyn_totalcost_base);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeNumberValue("msdyn_unitcost", this.msdyn_unitcost);
        writer.writeNumberValue("msdyn_unitcost_base", this.msdyn_unitcost_base);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
