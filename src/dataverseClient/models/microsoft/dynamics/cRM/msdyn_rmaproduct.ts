import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_rmaFromDiscriminatorValue} from './createMsdyn_rmaFromDiscriminatorValue';
import {createMsdyn_rmareceiptproductFromDiscriminatorValue} from './createMsdyn_rmareceiptproductFromDiscriminatorValue';
import {createMsdyn_rtvproductFromDiscriminatorValue} from './createMsdyn_rtvproductFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
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
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_rma, Msdyn_rmareceiptproduct, Msdyn_rtvproduct, Msdyn_warehouse, Msdyn_workorderproduct, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_rmaproduct extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_changeownership_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_returntovendor_value?: string | undefined;
    private __msdyn_returntowarehouse_value?: string | undefined;
    private __msdyn_rma_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_woproduct_value?: string | undefined;
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
    private _msdyn_changeownership?: Account | undefined;
    private _msdyn_credittoaccount?: boolean | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_itemstatus?: number | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct?: Msdyn_rmareceiptproduct[] | undefined;
    private _msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct?: Msdyn_rtvproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_processingaction?: number | undefined;
    private _msdyn_product?: Product | undefined;
    private _msdyn_qtyprocessed?: number | undefined;
    private _msdyn_qtyreceived?: number | undefined;
    private _msdyn_quantitytoreturn?: number | undefined;
    private _msdyn_returntovendor?: Account | undefined;
    private _msdyn_returntowarehouse?: Msdyn_warehouse | undefined;
    private _msdyn_rma?: Msdyn_rma | undefined;
    private _msdyn_rmaproduct_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_rmaproduct_Annotations?: Annotation[] | undefined;
    private _msdyn_rmaproduct_Appointments?: Appointment[] | undefined;
    private _msdyn_rmaproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_rmaproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_rmaproduct_connections1?: Connection[] | undefined;
    private _msdyn_rmaproduct_connections2?: Connection[] | undefined;
    private _msdyn_rmaproduct_Emails?: Email[] | undefined;
    private _msdyn_rmaproduct_Faxes?: Fax[] | undefined;
    private _msdyn_rmaproduct_Letters?: Letter[] | undefined;
    private _msdyn_rmaproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_rmaproduct_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_rmaproduct_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_rmaproduct_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_rmaproduct_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_rmaproduct_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_rmaproduct_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_rmaproduct_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_rmaproduct_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_rmaproduct_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_rmaproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_rmaproduct_ProcessSession?: Processsession[] | undefined;
    private _msdyn_rmaproduct_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_rmaproduct_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_rmaproduct_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_rmaproduct_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_rmaproduct_Tasks?: Task[] | undefined;
    private _msdyn_rmaproductid?: string | undefined;
    private _msdyn_taxable?: boolean | undefined;
    private _msdyn_totalamount?: number | undefined;
    private _msdyn_totalamount_base?: number | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_unitamount?: number | undefined;
    private _msdyn_unitamount_base?: number | undefined;
    private _msdyn_woproduct?: Msdyn_workorderproduct | undefined;
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
     * Gets the _msdyn_changeownership_value property value. 
     * @returns a string
     */
    public get _msdyn_changeownership_value() {
        return this.__msdyn_changeownership_value;
    };
    /**
     * Sets the _msdyn_changeownership_value property value. 
     * @param value Value to set for the _msdyn_changeownership_value property.
     */
    public set _msdyn_changeownership_value(value: string | undefined) {
        this.__msdyn_changeownership_value = value;
    };
    /**
     * Gets the _msdyn_customerasset_value property value. 
     * @returns a string
     */
    public get _msdyn_customerasset_value() {
        return this.__msdyn_customerasset_value;
    };
    /**
     * Sets the _msdyn_customerasset_value property value. 
     * @param value Value to set for the _msdyn_customerasset_value property.
     */
    public set _msdyn_customerasset_value(value: string | undefined) {
        this.__msdyn_customerasset_value = value;
    };
    /**
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
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
     * Gets the _msdyn_returntovendor_value property value. 
     * @returns a string
     */
    public get _msdyn_returntovendor_value() {
        return this.__msdyn_returntovendor_value;
    };
    /**
     * Sets the _msdyn_returntovendor_value property value. 
     * @param value Value to set for the _msdyn_returntovendor_value property.
     */
    public set _msdyn_returntovendor_value(value: string | undefined) {
        this.__msdyn_returntovendor_value = value;
    };
    /**
     * Gets the _msdyn_returntowarehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_returntowarehouse_value() {
        return this.__msdyn_returntowarehouse_value;
    };
    /**
     * Sets the _msdyn_returntowarehouse_value property value. 
     * @param value Value to set for the _msdyn_returntowarehouse_value property.
     */
    public set _msdyn_returntowarehouse_value(value: string | undefined) {
        this.__msdyn_returntowarehouse_value = value;
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
     * Gets the _msdyn_woproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_woproduct_value() {
        return this.__msdyn_woproduct_value;
    };
    /**
     * Sets the _msdyn_woproduct_value property value. 
     * @param value Value to set for the _msdyn_woproduct_value property.
     */
    public set _msdyn_woproduct_value(value: string | undefined) {
        this.__msdyn_woproduct_value = value;
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
     * Instantiates a new msdyn_rmaproduct and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_changeownership_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_changeownership_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_returntovendor_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_returntovendor_value = n.getStringValue(); },
            "_msdyn_returntowarehouse_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_returntowarehouse_value = n.getStringValue(); },
            "_msdyn_rma_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_rma_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_woproduct_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._msdyn_woproduct_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_rmaproduct)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_rmaproduct).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_rmaproduct).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_rmaproduct).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_rmaproduct).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_rmaproduct).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_rmaproduct).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_rmaproduct).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_rmaproduct).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_changeownership": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_changeownership = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_credittoaccount": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_credittoaccount = n.getBooleanValue(); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_description = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_internalflags = n.getStringValue(); },
            "msdyn_itemstatus": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_itemstatus = n.getNumberValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct = n.getCollectionOfObjectValues<Msdyn_rmareceiptproduct>(createMsdyn_rmareceiptproductFromDiscriminatorValue); },
            "msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct = n.getCollectionOfObjectValues<Msdyn_rtvproduct>(createMsdyn_rtvproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_name = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_processingaction": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_processingaction = n.getNumberValue(); },
            "msdyn_product": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_qtyprocessed": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_qtyprocessed = n.getNumberValue(); },
            "msdyn_qtyreceived": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_qtyreceived = n.getNumberValue(); },
            "msdyn_quantitytoreturn": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_quantitytoreturn = n.getNumberValue(); },
            "msdyn_returntovendor": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_returntovendor = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_returntowarehouse": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_returntowarehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_rma": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rma = n.getObjectValue<Msdyn_rma>(createMsdyn_rmaFromDiscriminatorValue); },
            "msdyn_rmaproduct_ActivityPointers": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_rmaproduct_Annotations": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_rmaproduct_Appointments": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_rmaproduct_AsyncOperations": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_rmaproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_rmaproduct_connections1": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rmaproduct_connections2": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rmaproduct_Emails": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_rmaproduct_Faxes": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_rmaproduct_Letters": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_rmaproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_rmaproduct_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_rmaproduct_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_rmaproduct_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_rmaproduct_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_rmaproduct_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_rmaproduct_msfp_alerts": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_rmaproduct_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_rmaproduct_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_rmaproduct_PhoneCalls": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_rmaproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_rmaproduct_ProcessSession": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_rmaproduct_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_rmaproduct_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_rmaproduct_SocialActivities": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_rmaproduct_SyncErrors": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_rmaproduct_Tasks": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproduct_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_rmaproductid": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_rmaproductid = n.getStringValue(); },
            "msdyn_taxable": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_taxable = n.getBooleanValue(); },
            "msdyn_totalamount": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_totalamount = n.getNumberValue(); },
            "msdyn_totalamount_base": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_totalamount_base = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitamount": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_unitamount = n.getNumberValue(); },
            "msdyn_unitamount_base": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_unitamount_base = n.getNumberValue(); },
            "msdyn_woproduct": (o, n) => { (o as unknown as Msdyn_rmaproduct).msdyn_woproduct = n.getObjectValue<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_rmaproduct).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_rmaproduct).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_rmaproduct).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_rmaproduct).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_rmaproduct).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_rmaproduct).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_rmaproduct).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_rmaproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_rmaproduct).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_rmaproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_rmaproduct).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_changeownership property value. 
     * @returns a account
     */
    public get msdyn_changeownership() {
        return this._msdyn_changeownership;
    };
    /**
     * Sets the msdyn_changeownership property value. 
     * @param value Value to set for the msdyn_changeownership property.
     */
    public set msdyn_changeownership(value: Account | undefined) {
        this._msdyn_changeownership = value;
    };
    /**
     * Gets the msdyn_credittoaccount property value. 
     * @returns a boolean
     */
    public get msdyn_credittoaccount() {
        return this._msdyn_credittoaccount;
    };
    /**
     * Sets the msdyn_credittoaccount property value. 
     * @param value Value to set for the msdyn_credittoaccount property.
     */
    public set msdyn_credittoaccount(value: boolean | undefined) {
        this._msdyn_credittoaccount = value;
    };
    /**
     * Gets the msdyn_customerasset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_customerasset() {
        return this._msdyn_customerasset;
    };
    /**
     * Sets the msdyn_customerasset property value. 
     * @param value Value to set for the msdyn_customerasset property.
     */
    public set msdyn_customerasset(value: Msdyn_customerasset | undefined) {
        this._msdyn_customerasset = value;
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
     * Gets the msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct property value. 
     * @returns a msdyn_rmareceiptproduct
     */
    public get msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct() {
        return this._msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct;
    };
    /**
     * Sets the msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct property value. 
     * @param value Value to set for the msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct property.
     */
    public set msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct(value: Msdyn_rmareceiptproduct[] | undefined) {
        this._msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct = value;
    };
    /**
     * Gets the msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct property value. 
     * @returns a msdyn_rtvproduct
     */
    public get msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct() {
        return this._msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct;
    };
    /**
     * Sets the msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct property value. 
     * @param value Value to set for the msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct property.
     */
    public set msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct(value: Msdyn_rtvproduct[] | undefined) {
        this._msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct = value;
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
     * Gets the msdyn_pricelist property value. 
     * @returns a pricelevel
     */
    public get msdyn_pricelist() {
        return this._msdyn_pricelist;
    };
    /**
     * Sets the msdyn_pricelist property value. 
     * @param value Value to set for the msdyn_pricelist property.
     */
    public set msdyn_pricelist(value: Pricelevel | undefined) {
        this._msdyn_pricelist = value;
    };
    /**
     * Gets the msdyn_processingaction property value. 
     * @returns a integer
     */
    public get msdyn_processingaction() {
        return this._msdyn_processingaction;
    };
    /**
     * Sets the msdyn_processingaction property value. 
     * @param value Value to set for the msdyn_processingaction property.
     */
    public set msdyn_processingaction(value: number | undefined) {
        this._msdyn_processingaction = value;
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
     * Gets the msdyn_qtyprocessed property value. 
     * @returns a double
     */
    public get msdyn_qtyprocessed() {
        return this._msdyn_qtyprocessed;
    };
    /**
     * Sets the msdyn_qtyprocessed property value. 
     * @param value Value to set for the msdyn_qtyprocessed property.
     */
    public set msdyn_qtyprocessed(value: number | undefined) {
        this._msdyn_qtyprocessed = value;
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
     * Gets the msdyn_quantitytoreturn property value. 
     * @returns a double
     */
    public get msdyn_quantitytoreturn() {
        return this._msdyn_quantitytoreturn;
    };
    /**
     * Sets the msdyn_quantitytoreturn property value. 
     * @param value Value to set for the msdyn_quantitytoreturn property.
     */
    public set msdyn_quantitytoreturn(value: number | undefined) {
        this._msdyn_quantitytoreturn = value;
    };
    /**
     * Gets the msdyn_returntovendor property value. 
     * @returns a account
     */
    public get msdyn_returntovendor() {
        return this._msdyn_returntovendor;
    };
    /**
     * Sets the msdyn_returntovendor property value. 
     * @param value Value to set for the msdyn_returntovendor property.
     */
    public set msdyn_returntovendor(value: Account | undefined) {
        this._msdyn_returntovendor = value;
    };
    /**
     * Gets the msdyn_returntowarehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_returntowarehouse() {
        return this._msdyn_returntowarehouse;
    };
    /**
     * Sets the msdyn_returntowarehouse property value. 
     * @param value Value to set for the msdyn_returntowarehouse property.
     */
    public set msdyn_returntowarehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_returntowarehouse = value;
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
     * Gets the msdyn_rmaproduct_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_rmaproduct_ActivityPointers() {
        return this._msdyn_rmaproduct_ActivityPointers;
    };
    /**
     * Sets the msdyn_rmaproduct_ActivityPointers property value. 
     * @param value Value to set for the msdyn_rmaproduct_ActivityPointers property.
     */
    public set msdyn_rmaproduct_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_rmaproduct_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_rmaproduct_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_rmaproduct_Annotations() {
        return this._msdyn_rmaproduct_Annotations;
    };
    /**
     * Sets the msdyn_rmaproduct_Annotations property value. 
     * @param value Value to set for the msdyn_rmaproduct_Annotations property.
     */
    public set msdyn_rmaproduct_Annotations(value: Annotation[] | undefined) {
        this._msdyn_rmaproduct_Annotations = value;
    };
    /**
     * Gets the msdyn_rmaproduct_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_rmaproduct_Appointments() {
        return this._msdyn_rmaproduct_Appointments;
    };
    /**
     * Sets the msdyn_rmaproduct_Appointments property value. 
     * @param value Value to set for the msdyn_rmaproduct_Appointments property.
     */
    public set msdyn_rmaproduct_Appointments(value: Appointment[] | undefined) {
        this._msdyn_rmaproduct_Appointments = value;
    };
    /**
     * Gets the msdyn_rmaproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_rmaproduct_AsyncOperations() {
        return this._msdyn_rmaproduct_AsyncOperations;
    };
    /**
     * Sets the msdyn_rmaproduct_AsyncOperations property value. 
     * @param value Value to set for the msdyn_rmaproduct_AsyncOperations property.
     */
    public set msdyn_rmaproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_rmaproduct_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_rmaproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_rmaproduct_BulkDeleteFailures() {
        return this._msdyn_rmaproduct_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_rmaproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_rmaproduct_BulkDeleteFailures property.
     */
    public set msdyn_rmaproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_rmaproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_rmaproduct_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_rmaproduct_connections1() {
        return this._msdyn_rmaproduct_connections1;
    };
    /**
     * Sets the msdyn_rmaproduct_connections1 property value. 
     * @param value Value to set for the msdyn_rmaproduct_connections1 property.
     */
    public set msdyn_rmaproduct_connections1(value: Connection[] | undefined) {
        this._msdyn_rmaproduct_connections1 = value;
    };
    /**
     * Gets the msdyn_rmaproduct_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_rmaproduct_connections2() {
        return this._msdyn_rmaproduct_connections2;
    };
    /**
     * Sets the msdyn_rmaproduct_connections2 property value. 
     * @param value Value to set for the msdyn_rmaproduct_connections2 property.
     */
    public set msdyn_rmaproduct_connections2(value: Connection[] | undefined) {
        this._msdyn_rmaproduct_connections2 = value;
    };
    /**
     * Gets the msdyn_rmaproduct_Emails property value. 
     * @returns a email
     */
    public get msdyn_rmaproduct_Emails() {
        return this._msdyn_rmaproduct_Emails;
    };
    /**
     * Sets the msdyn_rmaproduct_Emails property value. 
     * @param value Value to set for the msdyn_rmaproduct_Emails property.
     */
    public set msdyn_rmaproduct_Emails(value: Email[] | undefined) {
        this._msdyn_rmaproduct_Emails = value;
    };
    /**
     * Gets the msdyn_rmaproduct_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_rmaproduct_Faxes() {
        return this._msdyn_rmaproduct_Faxes;
    };
    /**
     * Sets the msdyn_rmaproduct_Faxes property value. 
     * @param value Value to set for the msdyn_rmaproduct_Faxes property.
     */
    public set msdyn_rmaproduct_Faxes(value: Fax[] | undefined) {
        this._msdyn_rmaproduct_Faxes = value;
    };
    /**
     * Gets the msdyn_rmaproduct_Letters property value. 
     * @returns a letter
     */
    public get msdyn_rmaproduct_Letters() {
        return this._msdyn_rmaproduct_Letters;
    };
    /**
     * Sets the msdyn_rmaproduct_Letters property value. 
     * @param value Value to set for the msdyn_rmaproduct_Letters property.
     */
    public set msdyn_rmaproduct_Letters(value: Letter[] | undefined) {
        this._msdyn_rmaproduct_Letters = value;
    };
    /**
     * Gets the msdyn_rmaproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_rmaproduct_MailboxTrackingFolders() {
        return this._msdyn_rmaproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_rmaproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_rmaproduct_MailboxTrackingFolders property.
     */
    public set msdyn_rmaproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_rmaproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_rmaproduct_msdyn_approvals() {
        return this._msdyn_rmaproduct_msdyn_approvals;
    };
    /**
     * Sets the msdyn_rmaproduct_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_rmaproduct_msdyn_approvals property.
     */
    public set msdyn_rmaproduct_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_rmaproduct_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_rmaproduct_msdyn_bookingalerts() {
        return this._msdyn_rmaproduct_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_rmaproduct_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_rmaproduct_msdyn_bookingalerts property.
     */
    public set msdyn_rmaproduct_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_rmaproduct_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_rmaproduct_msdyn_ocliveworkitems() {
        return this._msdyn_rmaproduct_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_rmaproduct_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_rmaproduct_msdyn_ocliveworkitems property.
     */
    public set msdyn_rmaproduct_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_rmaproduct_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_rmaproduct_msdyn_ocoutboundmessages() {
        return this._msdyn_rmaproduct_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_rmaproduct_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_rmaproduct_msdyn_ocoutboundmessages property.
     */
    public set msdyn_rmaproduct_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_rmaproduct_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_rmaproduct_msdyn_ocsessions() {
        return this._msdyn_rmaproduct_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_rmaproduct_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_rmaproduct_msdyn_ocsessions property.
     */
    public set msdyn_rmaproduct_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_rmaproduct_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_rmaproduct_msfp_alerts() {
        return this._msdyn_rmaproduct_msfp_alerts;
    };
    /**
     * Sets the msdyn_rmaproduct_msfp_alerts property value. 
     * @param value Value to set for the msdyn_rmaproduct_msfp_alerts property.
     */
    public set msdyn_rmaproduct_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_rmaproduct_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_rmaproduct_msfp_surveyinvites() {
        return this._msdyn_rmaproduct_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_rmaproduct_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_rmaproduct_msfp_surveyinvites property.
     */
    public set msdyn_rmaproduct_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_rmaproduct_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_rmaproduct_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_rmaproduct_msfp_surveyresponses() {
        return this._msdyn_rmaproduct_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_rmaproduct_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_rmaproduct_msfp_surveyresponses property.
     */
    public set msdyn_rmaproduct_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_rmaproduct_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_rmaproduct_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_rmaproduct_PhoneCalls() {
        return this._msdyn_rmaproduct_PhoneCalls;
    };
    /**
     * Sets the msdyn_rmaproduct_PhoneCalls property value. 
     * @param value Value to set for the msdyn_rmaproduct_PhoneCalls property.
     */
    public set msdyn_rmaproduct_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_rmaproduct_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_rmaproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_rmaproduct_PrincipalObjectAttributeAccesses() {
        return this._msdyn_rmaproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_rmaproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_rmaproduct_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_rmaproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_rmaproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_rmaproduct_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_rmaproduct_ProcessSession() {
        return this._msdyn_rmaproduct_ProcessSession;
    };
    /**
     * Sets the msdyn_rmaproduct_ProcessSession property value. 
     * @param value Value to set for the msdyn_rmaproduct_ProcessSession property.
     */
    public set msdyn_rmaproduct_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_rmaproduct_ProcessSession = value;
    };
    /**
     * Gets the msdyn_rmaproduct_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_rmaproduct_RecurringAppointmentMasters() {
        return this._msdyn_rmaproduct_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_rmaproduct_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_rmaproduct_RecurringAppointmentMasters property.
     */
    public set msdyn_rmaproduct_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_rmaproduct_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_rmaproduct_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_rmaproduct_ServiceAppointments() {
        return this._msdyn_rmaproduct_ServiceAppointments;
    };
    /**
     * Sets the msdyn_rmaproduct_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_rmaproduct_ServiceAppointments property.
     */
    public set msdyn_rmaproduct_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_rmaproduct_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_rmaproduct_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_rmaproduct_SocialActivities() {
        return this._msdyn_rmaproduct_SocialActivities;
    };
    /**
     * Sets the msdyn_rmaproduct_SocialActivities property value. 
     * @param value Value to set for the msdyn_rmaproduct_SocialActivities property.
     */
    public set msdyn_rmaproduct_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_rmaproduct_SocialActivities = value;
    };
    /**
     * Gets the msdyn_rmaproduct_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_rmaproduct_SyncErrors() {
        return this._msdyn_rmaproduct_SyncErrors;
    };
    /**
     * Sets the msdyn_rmaproduct_SyncErrors property value. 
     * @param value Value to set for the msdyn_rmaproduct_SyncErrors property.
     */
    public set msdyn_rmaproduct_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_rmaproduct_SyncErrors = value;
    };
    /**
     * Gets the msdyn_rmaproduct_Tasks property value. 
     * @returns a task
     */
    public get msdyn_rmaproduct_Tasks() {
        return this._msdyn_rmaproduct_Tasks;
    };
    /**
     * Sets the msdyn_rmaproduct_Tasks property value. 
     * @param value Value to set for the msdyn_rmaproduct_Tasks property.
     */
    public set msdyn_rmaproduct_Tasks(value: Task[] | undefined) {
        this._msdyn_rmaproduct_Tasks = value;
    };
    /**
     * Gets the msdyn_rmaproductid property value. 
     * @returns a string
     */
    public get msdyn_rmaproductid() {
        return this._msdyn_rmaproductid;
    };
    /**
     * Sets the msdyn_rmaproductid property value. 
     * @param value Value to set for the msdyn_rmaproductid property.
     */
    public set msdyn_rmaproductid(value: string | undefined) {
        this._msdyn_rmaproductid = value;
    };
    /**
     * Gets the msdyn_taxable property value. 
     * @returns a boolean
     */
    public get msdyn_taxable() {
        return this._msdyn_taxable;
    };
    /**
     * Sets the msdyn_taxable property value. 
     * @param value Value to set for the msdyn_taxable property.
     */
    public set msdyn_taxable(value: boolean | undefined) {
        this._msdyn_taxable = value;
    };
    /**
     * Gets the msdyn_totalamount property value. 
     * @returns a int64
     */
    public get msdyn_totalamount() {
        return this._msdyn_totalamount;
    };
    /**
     * Sets the msdyn_totalamount property value. 
     * @param value Value to set for the msdyn_totalamount property.
     */
    public set msdyn_totalamount(value: number | undefined) {
        this._msdyn_totalamount = value;
    };
    /**
     * Gets the msdyn_totalamount_base property value. 
     * @returns a int64
     */
    public get msdyn_totalamount_base() {
        return this._msdyn_totalamount_base;
    };
    /**
     * Sets the msdyn_totalamount_base property value. 
     * @param value Value to set for the msdyn_totalamount_base property.
     */
    public set msdyn_totalamount_base(value: number | undefined) {
        this._msdyn_totalamount_base = value;
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
     * Gets the msdyn_unitamount property value. 
     * @returns a int64
     */
    public get msdyn_unitamount() {
        return this._msdyn_unitamount;
    };
    /**
     * Sets the msdyn_unitamount property value. 
     * @param value Value to set for the msdyn_unitamount property.
     */
    public set msdyn_unitamount(value: number | undefined) {
        this._msdyn_unitamount = value;
    };
    /**
     * Gets the msdyn_unitamount_base property value. 
     * @returns a int64
     */
    public get msdyn_unitamount_base() {
        return this._msdyn_unitamount_base;
    };
    /**
     * Sets the msdyn_unitamount_base property value. 
     * @param value Value to set for the msdyn_unitamount_base property.
     */
    public set msdyn_unitamount_base(value: number | undefined) {
        this._msdyn_unitamount_base = value;
    };
    /**
     * Gets the msdyn_woproduct property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_woproduct() {
        return this._msdyn_woproduct;
    };
    /**
     * Sets the msdyn_woproduct property value. 
     * @param value Value to set for the msdyn_woproduct property.
     */
    public set msdyn_woproduct(value: Msdyn_workorderproduct | undefined) {
        this._msdyn_woproduct = value;
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
        writer.writeStringValue("_msdyn_changeownership_value", this._msdyn_changeownership_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_returntovendor_value", this._msdyn_returntovendor_value);
        writer.writeStringValue("_msdyn_returntowarehouse_value", this._msdyn_returntowarehouse_value);
        writer.writeStringValue("_msdyn_rma_value", this._msdyn_rma_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_woproduct_value", this._msdyn_woproduct_value);
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
        writer.writeObjectValue<Account>("msdyn_changeownership", this.msdyn_changeownership);
        writer.writeBooleanValue("msdyn_credittoaccount", this.msdyn_credittoaccount);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_itemstatus", this.msdyn_itemstatus);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Msdyn_rmareceiptproduct>("msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct", this.msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct);
        writer.writeCollectionOfObjectValues<Msdyn_rtvproduct>("msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct", this.msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeNumberValue("msdyn_processingaction", this.msdyn_processingaction);
        writer.writeObjectValue<Product>("msdyn_product", this.msdyn_product);
        writer.writeNumberValue("msdyn_qtyprocessed", this.msdyn_qtyprocessed);
        writer.writeNumberValue("msdyn_qtyreceived", this.msdyn_qtyreceived);
        writer.writeNumberValue("msdyn_quantitytoreturn", this.msdyn_quantitytoreturn);
        writer.writeObjectValue<Account>("msdyn_returntovendor", this.msdyn_returntovendor);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_returntowarehouse", this.msdyn_returntowarehouse);
        writer.writeObjectValue<Msdyn_rma>("msdyn_rma", this.msdyn_rma);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_rmaproduct_ActivityPointers", this.msdyn_rmaproduct_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_rmaproduct_Annotations", this.msdyn_rmaproduct_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_rmaproduct_Appointments", this.msdyn_rmaproduct_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_rmaproduct_AsyncOperations", this.msdyn_rmaproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_rmaproduct_BulkDeleteFailures", this.msdyn_rmaproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rmaproduct_connections1", this.msdyn_rmaproduct_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rmaproduct_connections2", this.msdyn_rmaproduct_connections2);
        writer.writeCollectionOfObjectValues<Email>("msdyn_rmaproduct_Emails", this.msdyn_rmaproduct_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_rmaproduct_Faxes", this.msdyn_rmaproduct_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_rmaproduct_Letters", this.msdyn_rmaproduct_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_rmaproduct_MailboxTrackingFolders", this.msdyn_rmaproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_rmaproduct_msdyn_approvals", this.msdyn_rmaproduct_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_rmaproduct_msdyn_bookingalerts", this.msdyn_rmaproduct_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_rmaproduct_msdyn_ocliveworkitems", this.msdyn_rmaproduct_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_rmaproduct_msdyn_ocoutboundmessages", this.msdyn_rmaproduct_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_rmaproduct_msdyn_ocsessions", this.msdyn_rmaproduct_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_rmaproduct_msfp_alerts", this.msdyn_rmaproduct_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_rmaproduct_msfp_surveyinvites", this.msdyn_rmaproduct_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_rmaproduct_msfp_surveyresponses", this.msdyn_rmaproduct_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_rmaproduct_PhoneCalls", this.msdyn_rmaproduct_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_rmaproduct_PrincipalObjectAttributeAccesses", this.msdyn_rmaproduct_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_rmaproduct_ProcessSession", this.msdyn_rmaproduct_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_rmaproduct_RecurringAppointmentMasters", this.msdyn_rmaproduct_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_rmaproduct_ServiceAppointments", this.msdyn_rmaproduct_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_rmaproduct_SocialActivities", this.msdyn_rmaproduct_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_rmaproduct_SyncErrors", this.msdyn_rmaproduct_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_rmaproduct_Tasks", this.msdyn_rmaproduct_Tasks);
        writer.writeStringValue("msdyn_rmaproductid", this.msdyn_rmaproductid);
        writer.writeBooleanValue("msdyn_taxable", this.msdyn_taxable);
        writer.writeNumberValue("msdyn_totalamount", this.msdyn_totalamount);
        writer.writeNumberValue("msdyn_totalamount_base", this.msdyn_totalamount_base);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeNumberValue("msdyn_unitamount", this.msdyn_unitamount);
        writer.writeNumberValue("msdyn_unitamount_base", this.msdyn_unitamount_base);
        writer.writeObjectValue<Msdyn_workorderproduct>("msdyn_woproduct", this.msdyn_woproduct);
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
