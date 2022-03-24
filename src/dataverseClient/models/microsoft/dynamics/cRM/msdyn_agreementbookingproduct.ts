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
import {createMsdyn_agreementbookingincidentFromDiscriminatorValue} from './createMsdyn_agreementbookingincidentFromDiscriminatorValue';
import {createMsdyn_agreementbookingsetupFromDiscriminatorValue} from './createMsdyn_agreementbookingsetupFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
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
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_agreementbookingincident, Msdyn_agreementbookingsetup, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_workorderproduct, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_agreementbookingproduct extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_agreementbookingincident_value?: string | undefined;
    private __msdyn_agreementbookingsetup_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
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
    private _msdyn_agreement?: Msdyn_agreement | undefined;
    private _msdyn_agreementbookingincident?: Msdyn_agreementbookingincident | undefined;
    private _msdyn_agreementbookingproduct_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_agreementbookingproduct_Annotations?: Annotation[] | undefined;
    private _msdyn_agreementbookingproduct_Appointments?: Appointment[] | undefined;
    private _msdyn_agreementbookingproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_agreementbookingproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_agreementbookingproduct_connections1?: Connection[] | undefined;
    private _msdyn_agreementbookingproduct_connections2?: Connection[] | undefined;
    private _msdyn_agreementbookingproduct_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingproduct_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingproduct_Emails?: Email[] | undefined;
    private _msdyn_agreementbookingproduct_Faxes?: Fax[] | undefined;
    private _msdyn_agreementbookingproduct_Letters?: Letter[] | undefined;
    private _msdyn_agreementbookingproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_agreementbookingproduct_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_agreementbookingproduct_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_agreementbookingproduct_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_agreementbookingproduct_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_agreementbookingproduct_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_agreementbookingproduct_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_agreementbookingproduct_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_agreementbookingproduct_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_agreementbookingproduct_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_agreementbookingproduct_ProcessSession?: Processsession[] | undefined;
    private _msdyn_agreementbookingproduct_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_agreementbookingproduct_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_agreementbookingproduct_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_agreementbookingproduct_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_agreementbookingproduct_Tasks?: Task[] | undefined;
    private _msdyn_agreementbookingproductid?: string | undefined;
    private _msdyn_agreementbookingsetup?: Msdyn_agreementbookingsetup | undefined;
    private _msdyn_currency?: number | undefined;
    private _msdyn_currency_base?: number | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_iscopied?: boolean | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct?: Msdyn_workorderproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_product?: Product | undefined;
    private _msdyn_qtytobill?: number | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_unitamount?: number | undefined;
    private _msdyn_unitamount_base?: number | undefined;
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
     * Gets the _msdyn_agreement_value property value. 
     * @returns a string
     */
    public get _msdyn_agreement_value() {
        return this.__msdyn_agreement_value;
    };
    /**
     * Sets the _msdyn_agreement_value property value. 
     * @param value Value to set for the _msdyn_agreement_value property.
     */
    public set _msdyn_agreement_value(value: string | undefined) {
        this.__msdyn_agreement_value = value;
    };
    /**
     * Gets the _msdyn_agreementbookingincident_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingincident_value() {
        return this.__msdyn_agreementbookingincident_value;
    };
    /**
     * Sets the _msdyn_agreementbookingincident_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingincident_value property.
     */
    public set _msdyn_agreementbookingincident_value(value: string | undefined) {
        this.__msdyn_agreementbookingincident_value = value;
    };
    /**
     * Gets the _msdyn_agreementbookingsetup_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingsetup_value() {
        return this.__msdyn_agreementbookingsetup_value;
    };
    /**
     * Sets the _msdyn_agreementbookingsetup_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingsetup_value property.
     */
    public set _msdyn_agreementbookingsetup_value(value: string | undefined) {
        this.__msdyn_agreementbookingsetup_value = value;
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
     * Instantiates a new msdyn_agreementbookingproduct and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_agreementbookingincident_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_agreementbookingincident_value = n.getStringValue(); },
            "_msdyn_agreementbookingsetup_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_agreementbookingsetup_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._msdyn_unit_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_agreementbookingincident": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingincident = n.getObjectValue<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_ActivityPointers": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_Annotations": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_Appointments": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_AsyncOperations": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_connections1": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_connections2": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_Emails": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_Faxes": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_Letters": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msfp_alerts": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_PhoneCalls": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_ProcessSession": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_SocialActivities": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_SyncErrors": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_agreementbookingproduct_Tasks": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproduct_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_agreementbookingproductid": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingproductid = n.getStringValue(); },
            "msdyn_agreementbookingsetup": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_agreementbookingsetup = n.getObjectValue<Msdyn_agreementbookingsetup>(createMsdyn_agreementbookingsetupFromDiscriminatorValue); },
            "msdyn_currency": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_currency = n.getNumberValue(); },
            "msdyn_currency_base": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_currency_base = n.getNumberValue(); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_iscopied": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_iscopied = n.getBooleanValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct = n.getCollectionOfObjectValues<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_name = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_product": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_qtytobill": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_qtytobill = n.getNumberValue(); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_quantity = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitamount": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_unitamount = n.getNumberValue(); },
            "msdyn_unitamount_base": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).msdyn_unitamount_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingproduct).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agreement property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_agreement() {
        return this._msdyn_agreement;
    };
    /**
     * Sets the msdyn_agreement property value. 
     * @param value Value to set for the msdyn_agreement property.
     */
    public set msdyn_agreement(value: Msdyn_agreement | undefined) {
        this._msdyn_agreement = value;
    };
    /**
     * Gets the msdyn_agreementbookingincident property value. 
     * @returns a msdyn_agreementbookingincident
     */
    public get msdyn_agreementbookingincident() {
        return this._msdyn_agreementbookingincident;
    };
    /**
     * Sets the msdyn_agreementbookingincident property value. 
     * @param value Value to set for the msdyn_agreementbookingincident property.
     */
    public set msdyn_agreementbookingincident(value: Msdyn_agreementbookingincident | undefined) {
        this._msdyn_agreementbookingincident = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_agreementbookingproduct_ActivityPointers() {
        return this._msdyn_agreementbookingproduct_ActivityPointers;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_ActivityPointers property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_ActivityPointers property.
     */
    public set msdyn_agreementbookingproduct_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_agreementbookingproduct_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_agreementbookingproduct_Annotations() {
        return this._msdyn_agreementbookingproduct_Annotations;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_Annotations property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_Annotations property.
     */
    public set msdyn_agreementbookingproduct_Annotations(value: Annotation[] | undefined) {
        this._msdyn_agreementbookingproduct_Annotations = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_agreementbookingproduct_Appointments() {
        return this._msdyn_agreementbookingproduct_Appointments;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_Appointments property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_Appointments property.
     */
    public set msdyn_agreementbookingproduct_Appointments(value: Appointment[] | undefined) {
        this._msdyn_agreementbookingproduct_Appointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_agreementbookingproduct_AsyncOperations() {
        return this._msdyn_agreementbookingproduct_AsyncOperations;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_AsyncOperations property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_AsyncOperations property.
     */
    public set msdyn_agreementbookingproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_agreementbookingproduct_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_agreementbookingproduct_BulkDeleteFailures() {
        return this._msdyn_agreementbookingproduct_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_BulkDeleteFailures property.
     */
    public set msdyn_agreementbookingproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_agreementbookingproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingproduct_connections1() {
        return this._msdyn_agreementbookingproduct_connections1;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_connections1 property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_connections1 property.
     */
    public set msdyn_agreementbookingproduct_connections1(value: Connection[] | undefined) {
        this._msdyn_agreementbookingproduct_connections1 = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingproduct_connections2() {
        return this._msdyn_agreementbookingproduct_connections2;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_connections2 property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_connections2 property.
     */
    public set msdyn_agreementbookingproduct_connections2(value: Connection[] | undefined) {
        this._msdyn_agreementbookingproduct_connections2 = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingproduct_DuplicateBaseRecord() {
        return this._msdyn_agreementbookingproduct_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_DuplicateBaseRecord property.
     */
    public set msdyn_agreementbookingproduct_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingproduct_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingproduct_DuplicateMatchingRecord() {
        return this._msdyn_agreementbookingproduct_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_DuplicateMatchingRecord property.
     */
    public set msdyn_agreementbookingproduct_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingproduct_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_Emails property value. 
     * @returns a email
     */
    public get msdyn_agreementbookingproduct_Emails() {
        return this._msdyn_agreementbookingproduct_Emails;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_Emails property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_Emails property.
     */
    public set msdyn_agreementbookingproduct_Emails(value: Email[] | undefined) {
        this._msdyn_agreementbookingproduct_Emails = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_agreementbookingproduct_Faxes() {
        return this._msdyn_agreementbookingproduct_Faxes;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_Faxes property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_Faxes property.
     */
    public set msdyn_agreementbookingproduct_Faxes(value: Fax[] | undefined) {
        this._msdyn_agreementbookingproduct_Faxes = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_Letters property value. 
     * @returns a letter
     */
    public get msdyn_agreementbookingproduct_Letters() {
        return this._msdyn_agreementbookingproduct_Letters;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_Letters property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_Letters property.
     */
    public set msdyn_agreementbookingproduct_Letters(value: Letter[] | undefined) {
        this._msdyn_agreementbookingproduct_Letters = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_agreementbookingproduct_MailboxTrackingFolders() {
        return this._msdyn_agreementbookingproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_MailboxTrackingFolders property.
     */
    public set msdyn_agreementbookingproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_agreementbookingproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_agreementbookingproduct_msdyn_approvals() {
        return this._msdyn_agreementbookingproduct_msdyn_approvals;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msdyn_approvals property.
     */
    public set msdyn_agreementbookingproduct_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_agreementbookingproduct_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_agreementbookingproduct_msdyn_bookingalerts() {
        return this._msdyn_agreementbookingproduct_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msdyn_bookingalerts property.
     */
    public set msdyn_agreementbookingproduct_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_agreementbookingproduct_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_agreementbookingproduct_msdyn_ocliveworkitems() {
        return this._msdyn_agreementbookingproduct_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msdyn_ocliveworkitems property.
     */
    public set msdyn_agreementbookingproduct_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_agreementbookingproduct_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_agreementbookingproduct_msdyn_ocoutboundmessages() {
        return this._msdyn_agreementbookingproduct_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msdyn_ocoutboundmessages property.
     */
    public set msdyn_agreementbookingproduct_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_agreementbookingproduct_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_agreementbookingproduct_msdyn_ocsessions() {
        return this._msdyn_agreementbookingproduct_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msdyn_ocsessions property.
     */
    public set msdyn_agreementbookingproduct_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_agreementbookingproduct_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_agreementbookingproduct_msfp_alerts() {
        return this._msdyn_agreementbookingproduct_msfp_alerts;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msfp_alerts property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msfp_alerts property.
     */
    public set msdyn_agreementbookingproduct_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_agreementbookingproduct_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_agreementbookingproduct_msfp_surveyinvites() {
        return this._msdyn_agreementbookingproduct_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msfp_surveyinvites property.
     */
    public set msdyn_agreementbookingproduct_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_agreementbookingproduct_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_agreementbookingproduct_msfp_surveyresponses() {
        return this._msdyn_agreementbookingproduct_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_msfp_surveyresponses property.
     */
    public set msdyn_agreementbookingproduct_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_agreementbookingproduct_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_agreementbookingproduct_PhoneCalls() {
        return this._msdyn_agreementbookingproduct_PhoneCalls;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_PhoneCalls property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_PhoneCalls property.
     */
    public set msdyn_agreementbookingproduct_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_agreementbookingproduct_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses() {
        return this._msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_agreementbookingproduct_ProcessSession() {
        return this._msdyn_agreementbookingproduct_ProcessSession;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_ProcessSession property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_ProcessSession property.
     */
    public set msdyn_agreementbookingproduct_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_agreementbookingproduct_ProcessSession = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_agreementbookingproduct_RecurringAppointmentMasters() {
        return this._msdyn_agreementbookingproduct_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_RecurringAppointmentMasters property.
     */
    public set msdyn_agreementbookingproduct_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_agreementbookingproduct_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_agreementbookingproduct_ServiceAppointments() {
        return this._msdyn_agreementbookingproduct_ServiceAppointments;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_ServiceAppointments property.
     */
    public set msdyn_agreementbookingproduct_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_agreementbookingproduct_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_agreementbookingproduct_SocialActivities() {
        return this._msdyn_agreementbookingproduct_SocialActivities;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_SocialActivities property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_SocialActivities property.
     */
    public set msdyn_agreementbookingproduct_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_agreementbookingproduct_SocialActivities = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_agreementbookingproduct_SyncErrors() {
        return this._msdyn_agreementbookingproduct_SyncErrors;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_SyncErrors property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_SyncErrors property.
     */
    public set msdyn_agreementbookingproduct_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_agreementbookingproduct_SyncErrors = value;
    };
    /**
     * Gets the msdyn_agreementbookingproduct_Tasks property value. 
     * @returns a task
     */
    public get msdyn_agreementbookingproduct_Tasks() {
        return this._msdyn_agreementbookingproduct_Tasks;
    };
    /**
     * Sets the msdyn_agreementbookingproduct_Tasks property value. 
     * @param value Value to set for the msdyn_agreementbookingproduct_Tasks property.
     */
    public set msdyn_agreementbookingproduct_Tasks(value: Task[] | undefined) {
        this._msdyn_agreementbookingproduct_Tasks = value;
    };
    /**
     * Gets the msdyn_agreementbookingproductid property value. 
     * @returns a string
     */
    public get msdyn_agreementbookingproductid() {
        return this._msdyn_agreementbookingproductid;
    };
    /**
     * Sets the msdyn_agreementbookingproductid property value. 
     * @param value Value to set for the msdyn_agreementbookingproductid property.
     */
    public set msdyn_agreementbookingproductid(value: string | undefined) {
        this._msdyn_agreementbookingproductid = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup property value. 
     * @returns a msdyn_agreementbookingsetup
     */
    public get msdyn_agreementbookingsetup() {
        return this._msdyn_agreementbookingsetup;
    };
    /**
     * Sets the msdyn_agreementbookingsetup property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup property.
     */
    public set msdyn_agreementbookingsetup(value: Msdyn_agreementbookingsetup | undefined) {
        this._msdyn_agreementbookingsetup = value;
    };
    /**
     * Gets the msdyn_currency property value. 
     * @returns a int64
     */
    public get msdyn_currency() {
        return this._msdyn_currency;
    };
    /**
     * Sets the msdyn_currency property value. 
     * @param value Value to set for the msdyn_currency property.
     */
    public set msdyn_currency(value: number | undefined) {
        this._msdyn_currency = value;
    };
    /**
     * Gets the msdyn_currency_base property value. 
     * @returns a int64
     */
    public get msdyn_currency_base() {
        return this._msdyn_currency_base;
    };
    /**
     * Sets the msdyn_currency_base property value. 
     * @param value Value to set for the msdyn_currency_base property.
     */
    public set msdyn_currency_base(value: number | undefined) {
        this._msdyn_currency_base = value;
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
     * Gets the msdyn_iscopied property value. 
     * @returns a boolean
     */
    public get msdyn_iscopied() {
        return this._msdyn_iscopied;
    };
    /**
     * Sets the msdyn_iscopied property value. 
     * @param value Value to set for the msdyn_iscopied property.
     */
    public set msdyn_iscopied(value: boolean | undefined) {
        this._msdyn_iscopied = value;
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
     * Gets the msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct() {
        return this._msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct property.
     */
    public set msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct(value: Msdyn_workorderproduct[] | undefined) {
        this._msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct = value;
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
     * Gets the msdyn_qtytobill property value. 
     * @returns a double
     */
    public get msdyn_qtytobill() {
        return this._msdyn_qtytobill;
    };
    /**
     * Sets the msdyn_qtytobill property value. 
     * @param value Value to set for the msdyn_qtytobill property.
     */
    public set msdyn_qtytobill(value: number | undefined) {
        this._msdyn_qtytobill = value;
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
        writer.writeStringValue("_msdyn_agreement_value", this._msdyn_agreement_value);
        writer.writeStringValue("_msdyn_agreementbookingincident_value", this._msdyn_agreementbookingincident_value);
        writer.writeStringValue("_msdyn_agreementbookingsetup_value", this._msdyn_agreementbookingsetup_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
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
        writer.writeObjectValue<Msdyn_agreement>("msdyn_agreement", this.msdyn_agreement);
        writer.writeObjectValue<Msdyn_agreementbookingincident>("msdyn_agreementbookingincident", this.msdyn_agreementbookingincident);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_agreementbookingproduct_ActivityPointers", this.msdyn_agreementbookingproduct_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_agreementbookingproduct_Annotations", this.msdyn_agreementbookingproduct_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_agreementbookingproduct_Appointments", this.msdyn_agreementbookingproduct_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_agreementbookingproduct_AsyncOperations", this.msdyn_agreementbookingproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_agreementbookingproduct_BulkDeleteFailures", this.msdyn_agreementbookingproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingproduct_connections1", this.msdyn_agreementbookingproduct_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingproduct_connections2", this.msdyn_agreementbookingproduct_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingproduct_DuplicateBaseRecord", this.msdyn_agreementbookingproduct_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingproduct_DuplicateMatchingRecord", this.msdyn_agreementbookingproduct_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_agreementbookingproduct_Emails", this.msdyn_agreementbookingproduct_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_agreementbookingproduct_Faxes", this.msdyn_agreementbookingproduct_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_agreementbookingproduct_Letters", this.msdyn_agreementbookingproduct_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_agreementbookingproduct_MailboxTrackingFolders", this.msdyn_agreementbookingproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_agreementbookingproduct_msdyn_approvals", this.msdyn_agreementbookingproduct_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_agreementbookingproduct_msdyn_bookingalerts", this.msdyn_agreementbookingproduct_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_agreementbookingproduct_msdyn_ocliveworkitems", this.msdyn_agreementbookingproduct_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_agreementbookingproduct_msdyn_ocoutboundmessages", this.msdyn_agreementbookingproduct_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_agreementbookingproduct_msdyn_ocsessions", this.msdyn_agreementbookingproduct_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_agreementbookingproduct_msfp_alerts", this.msdyn_agreementbookingproduct_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_agreementbookingproduct_msfp_surveyinvites", this.msdyn_agreementbookingproduct_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_agreementbookingproduct_msfp_surveyresponses", this.msdyn_agreementbookingproduct_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_agreementbookingproduct_PhoneCalls", this.msdyn_agreementbookingproduct_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses", this.msdyn_agreementbookingproduct_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_agreementbookingproduct_ProcessSession", this.msdyn_agreementbookingproduct_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_agreementbookingproduct_RecurringAppointmentMasters", this.msdyn_agreementbookingproduct_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_agreementbookingproduct_ServiceAppointments", this.msdyn_agreementbookingproduct_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_agreementbookingproduct_SocialActivities", this.msdyn_agreementbookingproduct_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_agreementbookingproduct_SyncErrors", this.msdyn_agreementbookingproduct_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_agreementbookingproduct_Tasks", this.msdyn_agreementbookingproduct_Tasks);
        writer.writeStringValue("msdyn_agreementbookingproductid", this.msdyn_agreementbookingproductid);
        writer.writeObjectValue<Msdyn_agreementbookingsetup>("msdyn_agreementbookingsetup", this.msdyn_agreementbookingsetup);
        writer.writeNumberValue("msdyn_currency", this.msdyn_currency);
        writer.writeNumberValue("msdyn_currency_base", this.msdyn_currency_base);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeBooleanValue("msdyn_iscopied", this.msdyn_iscopied);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Msdyn_workorderproduct>("msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct", this.msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeObjectValue<Product>("msdyn_product", this.msdyn_product);
        writer.writeNumberValue("msdyn_qtytobill", this.msdyn_qtytobill);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeNumberValue("msdyn_unitamount", this.msdyn_unitamount);
        writer.writeNumberValue("msdyn_unitamount_base", this.msdyn_unitamount_base);
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
