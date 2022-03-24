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
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_rmaFromDiscriminatorValue} from './createMsdyn_rmaFromDiscriminatorValue';
import {createMsdyn_rmaproductFromDiscriminatorValue} from './createMsdyn_rmaproductFromDiscriminatorValue';
import {createMsdyn_rmareceiptproductFromDiscriminatorValue} from './createMsdyn_rmareceiptproductFromDiscriminatorValue';
import {createMsdyn_rtvFromDiscriminatorValue} from './createMsdyn_rtvFromDiscriminatorValue';
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
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_rma, Msdyn_rmaproduct, Msdyn_rmareceiptproduct, Msdyn_rtv, Msdyn_warehouse, Msdyn_workorder, Msdyn_workorderproduct, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_rtvproduct extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_rma_value?: string | undefined;
    private __msdyn_rmaproduct_value?: string | undefined;
    private __msdyn_rtv_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_warehouse_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __msdyn_workorderproduct_value?: string | undefined;
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
    private _msdyn_description?: string | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct?: Msdyn_rmareceiptproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_product?: Product | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_rma?: Msdyn_rma | undefined;
    private _msdyn_rmaproduct?: Msdyn_rmaproduct | undefined;
    private _msdyn_rtv?: Msdyn_rtv | undefined;
    private _msdyn_rtvproduct_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_rtvproduct_Annotations?: Annotation[] | undefined;
    private _msdyn_rtvproduct_Appointments?: Appointment[] | undefined;
    private _msdyn_rtvproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_rtvproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_rtvproduct_connections1?: Connection[] | undefined;
    private _msdyn_rtvproduct_connections2?: Connection[] | undefined;
    private _msdyn_rtvproduct_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rtvproduct_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rtvproduct_Emails?: Email[] | undefined;
    private _msdyn_rtvproduct_Faxes?: Fax[] | undefined;
    private _msdyn_rtvproduct_Letters?: Letter[] | undefined;
    private _msdyn_rtvproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_rtvproduct_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_rtvproduct_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_rtvproduct_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_rtvproduct_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_rtvproduct_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_rtvproduct_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_rtvproduct_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_rtvproduct_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_rtvproduct_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_rtvproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_rtvproduct_ProcessSession?: Processsession[] | undefined;
    private _msdyn_rtvproduct_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_rtvproduct_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_rtvproduct_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_rtvproduct_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_rtvproduct_Tasks?: Task[] | undefined;
    private _msdyn_rtvproductid?: string | undefined;
    private _msdyn_totalcreditamount?: number | undefined;
    private _msdyn_totalcreditamount_base?: number | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_unitcreditamount?: number | undefined;
    private _msdyn_unitcreditamount_base?: number | undefined;
    private _msdyn_warehouse?: Msdyn_warehouse | undefined;
    private _msdyn_workorder?: Msdyn_workorder | undefined;
    private _msdyn_workorderproduct?: Msdyn_workorderproduct | undefined;
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
     * Gets the _msdyn_rma_value property value. 
     * @returns a string
     */
    public get _msdyn_rma_value() {
        return this.__msdyn_rma_value;
    };
    /**
     * Sets the _msdyn_rma_value property value. 
     * @param value Value to set for the _msdyn_rma_value property.
     */
    public set _msdyn_rma_value(value: string | undefined) {
        this.__msdyn_rma_value = value;
    };
    /**
     * Gets the _msdyn_rmaproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_rmaproduct_value() {
        return this.__msdyn_rmaproduct_value;
    };
    /**
     * Sets the _msdyn_rmaproduct_value property value. 
     * @param value Value to set for the _msdyn_rmaproduct_value property.
     */
    public set _msdyn_rmaproduct_value(value: string | undefined) {
        this.__msdyn_rmaproduct_value = value;
    };
    /**
     * Gets the _msdyn_rtv_value property value. 
     * @returns a string
     */
    public get _msdyn_rtv_value() {
        return this.__msdyn_rtv_value;
    };
    /**
     * Sets the _msdyn_rtv_value property value. 
     * @param value Value to set for the _msdyn_rtv_value property.
     */
    public set _msdyn_rtv_value(value: string | undefined) {
        this.__msdyn_rtv_value = value;
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
     * Gets the _msdyn_workorder_value property value. 
     * @returns a string
     */
    public get _msdyn_workorder_value() {
        return this.__msdyn_workorder_value;
    };
    /**
     * Sets the _msdyn_workorder_value property value. 
     * @param value Value to set for the _msdyn_workorder_value property.
     */
    public set _msdyn_workorder_value(value: string | undefined) {
        this.__msdyn_workorder_value = value;
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
     * Instantiates a new msdyn_rtvproduct and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_rma_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_rma_value = n.getStringValue(); },
            "_msdyn_rmaproduct_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_rmaproduct_value = n.getStringValue(); },
            "_msdyn_rtv_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_rtv_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_warehouse_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_warehouse_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_workorder_value = n.getStringValue(); },
            "_msdyn_workorderproduct_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._msdyn_workorderproduct_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_rtvproduct)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_rtvproduct).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_rtvproduct).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_rtvproduct).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_rtvproduct).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_rtvproduct).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_rtvproduct).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_rtvproduct).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_rtvproduct).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_description = n.getStringValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct = n.getCollectionOfObjectValues<Msdyn_rmareceiptproduct>(createMsdyn_rmareceiptproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_name = n.getStringValue(); },
            "msdyn_product": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_quantity = n.getNumberValue(); },
            "msdyn_rma": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rma = n.getObjectValue<Msdyn_rma>(createMsdyn_rmaFromDiscriminatorValue); },
            "msdyn_rmaproduct": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rmaproduct = n.getObjectValue<Msdyn_rmaproduct>(createMsdyn_rmaproductFromDiscriminatorValue); },
            "msdyn_rtv": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtv = n.getObjectValue<Msdyn_rtv>(createMsdyn_rtvFromDiscriminatorValue); },
            "msdyn_rtvproduct_ActivityPointers": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_rtvproduct_Annotations": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_rtvproduct_Appointments": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_rtvproduct_AsyncOperations": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_rtvproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_rtvproduct_connections1": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rtvproduct_connections2": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rtvproduct_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rtvproduct_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rtvproduct_Emails": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_rtvproduct_Faxes": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_rtvproduct_Letters": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_rtvproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_rtvproduct_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_rtvproduct_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_rtvproduct_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_rtvproduct_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_rtvproduct_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_rtvproduct_msfp_alerts": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_rtvproduct_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_rtvproduct_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_rtvproduct_PhoneCalls": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_rtvproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_rtvproduct_ProcessSession": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_rtvproduct_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_rtvproduct_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_rtvproduct_SocialActivities": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_rtvproduct_SyncErrors": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_rtvproduct_Tasks": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproduct_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_rtvproductid": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_rtvproductid = n.getStringValue(); },
            "msdyn_totalcreditamount": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_totalcreditamount = n.getNumberValue(); },
            "msdyn_totalcreditamount_base": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_totalcreditamount_base = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitcreditamount": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_unitcreditamount = n.getNumberValue(); },
            "msdyn_unitcreditamount_base": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_unitcreditamount_base = n.getNumberValue(); },
            "msdyn_warehouse": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_warehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_workorderproduct": (o, n) => { (o as unknown as Msdyn_rtvproduct).msdyn_workorderproduct = n.getObjectValue<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_rtvproduct).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_rtvproduct).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_rtvproduct).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_rtvproduct).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_rtvproduct).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_rtvproduct).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_rtvproduct).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_rtvproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_rtvproduct).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_rtvproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_rtvproduct).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct property value. 
     * @returns a msdyn_rmareceiptproduct
     */
    public get msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct() {
        return this._msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct;
    };
    /**
     * Sets the msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct property value. 
     * @param value Value to set for the msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct property.
     */
    public set msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct(value: Msdyn_rmareceiptproduct[] | undefined) {
        this._msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct = value;
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
     * Gets the msdyn_rma property value. 
     * @returns a msdyn_rma
     */
    public get msdyn_rma() {
        return this._msdyn_rma;
    };
    /**
     * Sets the msdyn_rma property value. 
     * @param value Value to set for the msdyn_rma property.
     */
    public set msdyn_rma(value: Msdyn_rma | undefined) {
        this._msdyn_rma = value;
    };
    /**
     * Gets the msdyn_rmaproduct property value. 
     * @returns a msdyn_rmaproduct
     */
    public get msdyn_rmaproduct() {
        return this._msdyn_rmaproduct;
    };
    /**
     * Sets the msdyn_rmaproduct property value. 
     * @param value Value to set for the msdyn_rmaproduct property.
     */
    public set msdyn_rmaproduct(value: Msdyn_rmaproduct | undefined) {
        this._msdyn_rmaproduct = value;
    };
    /**
     * Gets the msdyn_rtv property value. 
     * @returns a msdyn_rtv
     */
    public get msdyn_rtv() {
        return this._msdyn_rtv;
    };
    /**
     * Sets the msdyn_rtv property value. 
     * @param value Value to set for the msdyn_rtv property.
     */
    public set msdyn_rtv(value: Msdyn_rtv | undefined) {
        this._msdyn_rtv = value;
    };
    /**
     * Gets the msdyn_rtvproduct_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_rtvproduct_ActivityPointers() {
        return this._msdyn_rtvproduct_ActivityPointers;
    };
    /**
     * Sets the msdyn_rtvproduct_ActivityPointers property value. 
     * @param value Value to set for the msdyn_rtvproduct_ActivityPointers property.
     */
    public set msdyn_rtvproduct_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_rtvproduct_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_rtvproduct_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_rtvproduct_Annotations() {
        return this._msdyn_rtvproduct_Annotations;
    };
    /**
     * Sets the msdyn_rtvproduct_Annotations property value. 
     * @param value Value to set for the msdyn_rtvproduct_Annotations property.
     */
    public set msdyn_rtvproduct_Annotations(value: Annotation[] | undefined) {
        this._msdyn_rtvproduct_Annotations = value;
    };
    /**
     * Gets the msdyn_rtvproduct_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_rtvproduct_Appointments() {
        return this._msdyn_rtvproduct_Appointments;
    };
    /**
     * Sets the msdyn_rtvproduct_Appointments property value. 
     * @param value Value to set for the msdyn_rtvproduct_Appointments property.
     */
    public set msdyn_rtvproduct_Appointments(value: Appointment[] | undefined) {
        this._msdyn_rtvproduct_Appointments = value;
    };
    /**
     * Gets the msdyn_rtvproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_rtvproduct_AsyncOperations() {
        return this._msdyn_rtvproduct_AsyncOperations;
    };
    /**
     * Sets the msdyn_rtvproduct_AsyncOperations property value. 
     * @param value Value to set for the msdyn_rtvproduct_AsyncOperations property.
     */
    public set msdyn_rtvproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_rtvproduct_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_rtvproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_rtvproduct_BulkDeleteFailures() {
        return this._msdyn_rtvproduct_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_rtvproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_rtvproduct_BulkDeleteFailures property.
     */
    public set msdyn_rtvproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_rtvproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_rtvproduct_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_rtvproduct_connections1() {
        return this._msdyn_rtvproduct_connections1;
    };
    /**
     * Sets the msdyn_rtvproduct_connections1 property value. 
     * @param value Value to set for the msdyn_rtvproduct_connections1 property.
     */
    public set msdyn_rtvproduct_connections1(value: Connection[] | undefined) {
        this._msdyn_rtvproduct_connections1 = value;
    };
    /**
     * Gets the msdyn_rtvproduct_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_rtvproduct_connections2() {
        return this._msdyn_rtvproduct_connections2;
    };
    /**
     * Sets the msdyn_rtvproduct_connections2 property value. 
     * @param value Value to set for the msdyn_rtvproduct_connections2 property.
     */
    public set msdyn_rtvproduct_connections2(value: Connection[] | undefined) {
        this._msdyn_rtvproduct_connections2 = value;
    };
    /**
     * Gets the msdyn_rtvproduct_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rtvproduct_DuplicateBaseRecord() {
        return this._msdyn_rtvproduct_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_rtvproduct_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_rtvproduct_DuplicateBaseRecord property.
     */
    public set msdyn_rtvproduct_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rtvproduct_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_rtvproduct_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rtvproduct_DuplicateMatchingRecord() {
        return this._msdyn_rtvproduct_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_rtvproduct_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_rtvproduct_DuplicateMatchingRecord property.
     */
    public set msdyn_rtvproduct_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rtvproduct_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_rtvproduct_Emails property value. 
     * @returns a email
     */
    public get msdyn_rtvproduct_Emails() {
        return this._msdyn_rtvproduct_Emails;
    };
    /**
     * Sets the msdyn_rtvproduct_Emails property value. 
     * @param value Value to set for the msdyn_rtvproduct_Emails property.
     */
    public set msdyn_rtvproduct_Emails(value: Email[] | undefined) {
        this._msdyn_rtvproduct_Emails = value;
    };
    /**
     * Gets the msdyn_rtvproduct_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_rtvproduct_Faxes() {
        return this._msdyn_rtvproduct_Faxes;
    };
    /**
     * Sets the msdyn_rtvproduct_Faxes property value. 
     * @param value Value to set for the msdyn_rtvproduct_Faxes property.
     */
    public set msdyn_rtvproduct_Faxes(value: Fax[] | undefined) {
        this._msdyn_rtvproduct_Faxes = value;
    };
    /**
     * Gets the msdyn_rtvproduct_Letters property value. 
     * @returns a letter
     */
    public get msdyn_rtvproduct_Letters() {
        return this._msdyn_rtvproduct_Letters;
    };
    /**
     * Sets the msdyn_rtvproduct_Letters property value. 
     * @param value Value to set for the msdyn_rtvproduct_Letters property.
     */
    public set msdyn_rtvproduct_Letters(value: Letter[] | undefined) {
        this._msdyn_rtvproduct_Letters = value;
    };
    /**
     * Gets the msdyn_rtvproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_rtvproduct_MailboxTrackingFolders() {
        return this._msdyn_rtvproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_rtvproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_rtvproduct_MailboxTrackingFolders property.
     */
    public set msdyn_rtvproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_rtvproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_rtvproduct_msdyn_approvals() {
        return this._msdyn_rtvproduct_msdyn_approvals;
    };
    /**
     * Sets the msdyn_rtvproduct_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_rtvproduct_msdyn_approvals property.
     */
    public set msdyn_rtvproduct_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_rtvproduct_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_rtvproduct_msdyn_bookingalerts() {
        return this._msdyn_rtvproduct_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_rtvproduct_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_rtvproduct_msdyn_bookingalerts property.
     */
    public set msdyn_rtvproduct_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_rtvproduct_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_rtvproduct_msdyn_ocliveworkitems() {
        return this._msdyn_rtvproduct_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_rtvproduct_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_rtvproduct_msdyn_ocliveworkitems property.
     */
    public set msdyn_rtvproduct_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_rtvproduct_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_rtvproduct_msdyn_ocoutboundmessages() {
        return this._msdyn_rtvproduct_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_rtvproduct_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_rtvproduct_msdyn_ocoutboundmessages property.
     */
    public set msdyn_rtvproduct_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_rtvproduct_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_rtvproduct_msdyn_ocsessions() {
        return this._msdyn_rtvproduct_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_rtvproduct_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_rtvproduct_msdyn_ocsessions property.
     */
    public set msdyn_rtvproduct_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_rtvproduct_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_rtvproduct_msfp_alerts() {
        return this._msdyn_rtvproduct_msfp_alerts;
    };
    /**
     * Sets the msdyn_rtvproduct_msfp_alerts property value. 
     * @param value Value to set for the msdyn_rtvproduct_msfp_alerts property.
     */
    public set msdyn_rtvproduct_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_rtvproduct_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_rtvproduct_msfp_surveyinvites() {
        return this._msdyn_rtvproduct_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_rtvproduct_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_rtvproduct_msfp_surveyinvites property.
     */
    public set msdyn_rtvproduct_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_rtvproduct_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_rtvproduct_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_rtvproduct_msfp_surveyresponses() {
        return this._msdyn_rtvproduct_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_rtvproduct_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_rtvproduct_msfp_surveyresponses property.
     */
    public set msdyn_rtvproduct_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_rtvproduct_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_rtvproduct_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_rtvproduct_PhoneCalls() {
        return this._msdyn_rtvproduct_PhoneCalls;
    };
    /**
     * Sets the msdyn_rtvproduct_PhoneCalls property value. 
     * @param value Value to set for the msdyn_rtvproduct_PhoneCalls property.
     */
    public set msdyn_rtvproduct_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_rtvproduct_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_rtvproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_rtvproduct_PrincipalObjectAttributeAccesses() {
        return this._msdyn_rtvproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_rtvproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_rtvproduct_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_rtvproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_rtvproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_rtvproduct_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_rtvproduct_ProcessSession() {
        return this._msdyn_rtvproduct_ProcessSession;
    };
    /**
     * Sets the msdyn_rtvproduct_ProcessSession property value. 
     * @param value Value to set for the msdyn_rtvproduct_ProcessSession property.
     */
    public set msdyn_rtvproduct_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_rtvproduct_ProcessSession = value;
    };
    /**
     * Gets the msdyn_rtvproduct_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_rtvproduct_RecurringAppointmentMasters() {
        return this._msdyn_rtvproduct_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_rtvproduct_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_rtvproduct_RecurringAppointmentMasters property.
     */
    public set msdyn_rtvproduct_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_rtvproduct_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_rtvproduct_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_rtvproduct_ServiceAppointments() {
        return this._msdyn_rtvproduct_ServiceAppointments;
    };
    /**
     * Sets the msdyn_rtvproduct_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_rtvproduct_ServiceAppointments property.
     */
    public set msdyn_rtvproduct_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_rtvproduct_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_rtvproduct_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_rtvproduct_SocialActivities() {
        return this._msdyn_rtvproduct_SocialActivities;
    };
    /**
     * Sets the msdyn_rtvproduct_SocialActivities property value. 
     * @param value Value to set for the msdyn_rtvproduct_SocialActivities property.
     */
    public set msdyn_rtvproduct_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_rtvproduct_SocialActivities = value;
    };
    /**
     * Gets the msdyn_rtvproduct_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_rtvproduct_SyncErrors() {
        return this._msdyn_rtvproduct_SyncErrors;
    };
    /**
     * Sets the msdyn_rtvproduct_SyncErrors property value. 
     * @param value Value to set for the msdyn_rtvproduct_SyncErrors property.
     */
    public set msdyn_rtvproduct_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_rtvproduct_SyncErrors = value;
    };
    /**
     * Gets the msdyn_rtvproduct_Tasks property value. 
     * @returns a task
     */
    public get msdyn_rtvproduct_Tasks() {
        return this._msdyn_rtvproduct_Tasks;
    };
    /**
     * Sets the msdyn_rtvproduct_Tasks property value. 
     * @param value Value to set for the msdyn_rtvproduct_Tasks property.
     */
    public set msdyn_rtvproduct_Tasks(value: Task[] | undefined) {
        this._msdyn_rtvproduct_Tasks = value;
    };
    /**
     * Gets the msdyn_rtvproductid property value. 
     * @returns a string
     */
    public get msdyn_rtvproductid() {
        return this._msdyn_rtvproductid;
    };
    /**
     * Sets the msdyn_rtvproductid property value. 
     * @param value Value to set for the msdyn_rtvproductid property.
     */
    public set msdyn_rtvproductid(value: string | undefined) {
        this._msdyn_rtvproductid = value;
    };
    /**
     * Gets the msdyn_totalcreditamount property value. 
     * @returns a int64
     */
    public get msdyn_totalcreditamount() {
        return this._msdyn_totalcreditamount;
    };
    /**
     * Sets the msdyn_totalcreditamount property value. 
     * @param value Value to set for the msdyn_totalcreditamount property.
     */
    public set msdyn_totalcreditamount(value: number | undefined) {
        this._msdyn_totalcreditamount = value;
    };
    /**
     * Gets the msdyn_totalcreditamount_base property value. 
     * @returns a int64
     */
    public get msdyn_totalcreditamount_base() {
        return this._msdyn_totalcreditamount_base;
    };
    /**
     * Sets the msdyn_totalcreditamount_base property value. 
     * @param value Value to set for the msdyn_totalcreditamount_base property.
     */
    public set msdyn_totalcreditamount_base(value: number | undefined) {
        this._msdyn_totalcreditamount_base = value;
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
     * Gets the msdyn_unitcreditamount property value. 
     * @returns a int64
     */
    public get msdyn_unitcreditamount() {
        return this._msdyn_unitcreditamount;
    };
    /**
     * Sets the msdyn_unitcreditamount property value. 
     * @param value Value to set for the msdyn_unitcreditamount property.
     */
    public set msdyn_unitcreditamount(value: number | undefined) {
        this._msdyn_unitcreditamount = value;
    };
    /**
     * Gets the msdyn_unitcreditamount_base property value. 
     * @returns a int64
     */
    public get msdyn_unitcreditamount_base() {
        return this._msdyn_unitcreditamount_base;
    };
    /**
     * Sets the msdyn_unitcreditamount_base property value. 
     * @param value Value to set for the msdyn_unitcreditamount_base property.
     */
    public set msdyn_unitcreditamount_base(value: number | undefined) {
        this._msdyn_unitcreditamount_base = value;
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
     * Gets the msdyn_workorder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_workorder() {
        return this._msdyn_workorder;
    };
    /**
     * Sets the msdyn_workorder property value. 
     * @param value Value to set for the msdyn_workorder property.
     */
    public set msdyn_workorder(value: Msdyn_workorder | undefined) {
        this._msdyn_workorder = value;
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
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_rma_value", this._msdyn_rma_value);
        writer.writeStringValue("_msdyn_rmaproduct_value", this._msdyn_rmaproduct_value);
        writer.writeStringValue("_msdyn_rtv_value", this._msdyn_rtv_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_warehouse_value", this._msdyn_warehouse_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_msdyn_workorderproduct_value", this._msdyn_workorderproduct_value);
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
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Msdyn_rmareceiptproduct>("msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct", this.msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Product>("msdyn_product", this.msdyn_product);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeObjectValue<Msdyn_rma>("msdyn_rma", this.msdyn_rma);
        writer.writeObjectValue<Msdyn_rmaproduct>("msdyn_rmaproduct", this.msdyn_rmaproduct);
        writer.writeObjectValue<Msdyn_rtv>("msdyn_rtv", this.msdyn_rtv);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_rtvproduct_ActivityPointers", this.msdyn_rtvproduct_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_rtvproduct_Annotations", this.msdyn_rtvproduct_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_rtvproduct_Appointments", this.msdyn_rtvproduct_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_rtvproduct_AsyncOperations", this.msdyn_rtvproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_rtvproduct_BulkDeleteFailures", this.msdyn_rtvproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rtvproduct_connections1", this.msdyn_rtvproduct_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rtvproduct_connections2", this.msdyn_rtvproduct_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rtvproduct_DuplicateBaseRecord", this.msdyn_rtvproduct_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rtvproduct_DuplicateMatchingRecord", this.msdyn_rtvproduct_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_rtvproduct_Emails", this.msdyn_rtvproduct_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_rtvproduct_Faxes", this.msdyn_rtvproduct_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_rtvproduct_Letters", this.msdyn_rtvproduct_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_rtvproduct_MailboxTrackingFolders", this.msdyn_rtvproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_rtvproduct_msdyn_approvals", this.msdyn_rtvproduct_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_rtvproduct_msdyn_bookingalerts", this.msdyn_rtvproduct_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_rtvproduct_msdyn_ocliveworkitems", this.msdyn_rtvproduct_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_rtvproduct_msdyn_ocoutboundmessages", this.msdyn_rtvproduct_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_rtvproduct_msdyn_ocsessions", this.msdyn_rtvproduct_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_rtvproduct_msfp_alerts", this.msdyn_rtvproduct_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_rtvproduct_msfp_surveyinvites", this.msdyn_rtvproduct_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_rtvproduct_msfp_surveyresponses", this.msdyn_rtvproduct_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_rtvproduct_PhoneCalls", this.msdyn_rtvproduct_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_rtvproduct_PrincipalObjectAttributeAccesses", this.msdyn_rtvproduct_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_rtvproduct_ProcessSession", this.msdyn_rtvproduct_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_rtvproduct_RecurringAppointmentMasters", this.msdyn_rtvproduct_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_rtvproduct_ServiceAppointments", this.msdyn_rtvproduct_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_rtvproduct_SocialActivities", this.msdyn_rtvproduct_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_rtvproduct_SyncErrors", this.msdyn_rtvproduct_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_rtvproduct_Tasks", this.msdyn_rtvproduct_Tasks);
        writer.writeStringValue("msdyn_rtvproductid", this.msdyn_rtvproductid);
        writer.writeNumberValue("msdyn_totalcreditamount", this.msdyn_totalcreditamount);
        writer.writeNumberValue("msdyn_totalcreditamount_base", this.msdyn_totalcreditamount_base);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeNumberValue("msdyn_unitcreditamount", this.msdyn_unitcreditamount);
        writer.writeNumberValue("msdyn_unitcreditamount_base", this.msdyn_unitcreditamount_base);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_warehouse", this.msdyn_warehouse);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorder", this.msdyn_workorder);
        writer.writeObjectValue<Msdyn_workorderproduct>("msdyn_workorderproduct", this.msdyn_workorderproduct);
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
