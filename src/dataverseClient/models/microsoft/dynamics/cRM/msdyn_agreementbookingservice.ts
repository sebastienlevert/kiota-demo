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
import {createMsdyn_workorderserviceFromDiscriminatorValue} from './createMsdyn_workorderserviceFromDiscriminatorValue';
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
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_agreementbookingincident, Msdyn_agreementbookingsetup, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_workorderservice, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_agreementbookingservice extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_agreementbookingincident_value?: string | undefined;
    private __msdyn_agreementbookingsetup_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_service_value?: string | undefined;
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
    private _msdyn_agreementbookingservice_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_agreementbookingservice_Annotations?: Annotation[] | undefined;
    private _msdyn_agreementbookingservice_Appointments?: Appointment[] | undefined;
    private _msdyn_agreementbookingservice_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_agreementbookingservice_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_agreementbookingservice_connections1?: Connection[] | undefined;
    private _msdyn_agreementbookingservice_connections2?: Connection[] | undefined;
    private _msdyn_agreementbookingservice_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingservice_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingservice_Emails?: Email[] | undefined;
    private _msdyn_agreementbookingservice_Faxes?: Fax[] | undefined;
    private _msdyn_agreementbookingservice_Letters?: Letter[] | undefined;
    private _msdyn_agreementbookingservice_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_agreementbookingservice_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_agreementbookingservice_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_agreementbookingservice_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_agreementbookingservice_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_agreementbookingservice_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_agreementbookingservice_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_agreementbookingservice_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_agreementbookingservice_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_agreementbookingservice_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_agreementbookingservice_ProcessSession?: Processsession[] | undefined;
    private _msdyn_agreementbookingservice_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_agreementbookingservice_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_agreementbookingservice_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_agreementbookingservice_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_agreementbookingservice_Tasks?: Task[] | undefined;
    private _msdyn_agreementbookingserviceid?: string | undefined;
    private _msdyn_agreementbookingsetup?: Msdyn_agreementbookingsetup | undefined;
    private _msdyn_currency?: number | undefined;
    private _msdyn_currency_base?: number | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_durationtobill?: number | undefined;
    private _msdyn_iscopied?: boolean | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService?: Msdyn_workorderservice[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_service?: Product | undefined;
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
     * Gets the _msdyn_service_value property value. 
     * @returns a string
     */
    public get _msdyn_service_value() {
        return this.__msdyn_service_value;
    };
    /**
     * Sets the _msdyn_service_value property value. 
     * @param value Value to set for the _msdyn_service_value property.
     */
    public set _msdyn_service_value(value: string | undefined) {
        this.__msdyn_service_value = value;
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
     * Instantiates a new msdyn_agreementbookingservice and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_agreementbookingincident_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_agreementbookingincident_value = n.getStringValue(); },
            "_msdyn_agreementbookingsetup_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_agreementbookingsetup_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_service_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_service_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._msdyn_unit_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservice)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_agreementbookingincident": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingincident = n.getObjectValue<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_ActivityPointers": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_Annotations": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_Appointments": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_AsyncOperations": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_connections1": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_connections2": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_Emails": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_Faxes": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_Letters": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msfp_alerts": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_PhoneCalls": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_ProcessSession": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_SocialActivities": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_SyncErrors": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_agreementbookingservice_Tasks": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingservice_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_agreementbookingserviceid": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingserviceid = n.getStringValue(); },
            "msdyn_agreementbookingsetup": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_agreementbookingsetup = n.getObjectValue<Msdyn_agreementbookingsetup>(createMsdyn_agreementbookingsetupFromDiscriminatorValue); },
            "msdyn_currency": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_currency = n.getNumberValue(); },
            "msdyn_currency_base": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_currency_base = n.getNumberValue(); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_duration": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_duration = n.getNumberValue(); },
            "msdyn_durationtobill": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_durationtobill = n.getNumberValue(); },
            "msdyn_iscopied": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_iscopied = n.getBooleanValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService = n.getCollectionOfObjectValues<Msdyn_workorderservice>(createMsdyn_workorderserviceFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_name = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_service": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_service = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitamount": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_unitamount = n.getNumberValue(); },
            "msdyn_unitamount_base": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).msdyn_unitamount_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingservice).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agreementbookingservice_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_agreementbookingservice_ActivityPointers() {
        return this._msdyn_agreementbookingservice_ActivityPointers;
    };
    /**
     * Sets the msdyn_agreementbookingservice_ActivityPointers property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_ActivityPointers property.
     */
    public set msdyn_agreementbookingservice_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_agreementbookingservice_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_agreementbookingservice_Annotations() {
        return this._msdyn_agreementbookingservice_Annotations;
    };
    /**
     * Sets the msdyn_agreementbookingservice_Annotations property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_Annotations property.
     */
    public set msdyn_agreementbookingservice_Annotations(value: Annotation[] | undefined) {
        this._msdyn_agreementbookingservice_Annotations = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_agreementbookingservice_Appointments() {
        return this._msdyn_agreementbookingservice_Appointments;
    };
    /**
     * Sets the msdyn_agreementbookingservice_Appointments property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_Appointments property.
     */
    public set msdyn_agreementbookingservice_Appointments(value: Appointment[] | undefined) {
        this._msdyn_agreementbookingservice_Appointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_agreementbookingservice_AsyncOperations() {
        return this._msdyn_agreementbookingservice_AsyncOperations;
    };
    /**
     * Sets the msdyn_agreementbookingservice_AsyncOperations property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_AsyncOperations property.
     */
    public set msdyn_agreementbookingservice_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_agreementbookingservice_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_agreementbookingservice_BulkDeleteFailures() {
        return this._msdyn_agreementbookingservice_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_agreementbookingservice_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_BulkDeleteFailures property.
     */
    public set msdyn_agreementbookingservice_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_agreementbookingservice_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingservice_connections1() {
        return this._msdyn_agreementbookingservice_connections1;
    };
    /**
     * Sets the msdyn_agreementbookingservice_connections1 property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_connections1 property.
     */
    public set msdyn_agreementbookingservice_connections1(value: Connection[] | undefined) {
        this._msdyn_agreementbookingservice_connections1 = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingservice_connections2() {
        return this._msdyn_agreementbookingservice_connections2;
    };
    /**
     * Sets the msdyn_agreementbookingservice_connections2 property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_connections2 property.
     */
    public set msdyn_agreementbookingservice_connections2(value: Connection[] | undefined) {
        this._msdyn_agreementbookingservice_connections2 = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingservice_DuplicateBaseRecord() {
        return this._msdyn_agreementbookingservice_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_agreementbookingservice_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_DuplicateBaseRecord property.
     */
    public set msdyn_agreementbookingservice_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingservice_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingservice_DuplicateMatchingRecord() {
        return this._msdyn_agreementbookingservice_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_agreementbookingservice_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_DuplicateMatchingRecord property.
     */
    public set msdyn_agreementbookingservice_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingservice_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_Emails property value. 
     * @returns a email
     */
    public get msdyn_agreementbookingservice_Emails() {
        return this._msdyn_agreementbookingservice_Emails;
    };
    /**
     * Sets the msdyn_agreementbookingservice_Emails property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_Emails property.
     */
    public set msdyn_agreementbookingservice_Emails(value: Email[] | undefined) {
        this._msdyn_agreementbookingservice_Emails = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_agreementbookingservice_Faxes() {
        return this._msdyn_agreementbookingservice_Faxes;
    };
    /**
     * Sets the msdyn_agreementbookingservice_Faxes property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_Faxes property.
     */
    public set msdyn_agreementbookingservice_Faxes(value: Fax[] | undefined) {
        this._msdyn_agreementbookingservice_Faxes = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_Letters property value. 
     * @returns a letter
     */
    public get msdyn_agreementbookingservice_Letters() {
        return this._msdyn_agreementbookingservice_Letters;
    };
    /**
     * Sets the msdyn_agreementbookingservice_Letters property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_Letters property.
     */
    public set msdyn_agreementbookingservice_Letters(value: Letter[] | undefined) {
        this._msdyn_agreementbookingservice_Letters = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_agreementbookingservice_MailboxTrackingFolders() {
        return this._msdyn_agreementbookingservice_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_agreementbookingservice_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_MailboxTrackingFolders property.
     */
    public set msdyn_agreementbookingservice_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_agreementbookingservice_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_agreementbookingservice_msdyn_approvals() {
        return this._msdyn_agreementbookingservice_msdyn_approvals;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msdyn_approvals property.
     */
    public set msdyn_agreementbookingservice_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_agreementbookingservice_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_agreementbookingservice_msdyn_bookingalerts() {
        return this._msdyn_agreementbookingservice_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msdyn_bookingalerts property.
     */
    public set msdyn_agreementbookingservice_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_agreementbookingservice_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_agreementbookingservice_msdyn_ocliveworkitems() {
        return this._msdyn_agreementbookingservice_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msdyn_ocliveworkitems property.
     */
    public set msdyn_agreementbookingservice_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_agreementbookingservice_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_agreementbookingservice_msdyn_ocoutboundmessages() {
        return this._msdyn_agreementbookingservice_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msdyn_ocoutboundmessages property.
     */
    public set msdyn_agreementbookingservice_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_agreementbookingservice_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_agreementbookingservice_msdyn_ocsessions() {
        return this._msdyn_agreementbookingservice_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msdyn_ocsessions property.
     */
    public set msdyn_agreementbookingservice_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_agreementbookingservice_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_agreementbookingservice_msfp_alerts() {
        return this._msdyn_agreementbookingservice_msfp_alerts;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msfp_alerts property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msfp_alerts property.
     */
    public set msdyn_agreementbookingservice_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_agreementbookingservice_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_agreementbookingservice_msfp_surveyinvites() {
        return this._msdyn_agreementbookingservice_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msfp_surveyinvites property.
     */
    public set msdyn_agreementbookingservice_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_agreementbookingservice_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_agreementbookingservice_msfp_surveyresponses() {
        return this._msdyn_agreementbookingservice_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_agreementbookingservice_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_msfp_surveyresponses property.
     */
    public set msdyn_agreementbookingservice_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_agreementbookingservice_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_agreementbookingservice_PhoneCalls() {
        return this._msdyn_agreementbookingservice_PhoneCalls;
    };
    /**
     * Sets the msdyn_agreementbookingservice_PhoneCalls property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_PhoneCalls property.
     */
    public set msdyn_agreementbookingservice_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_agreementbookingservice_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses() {
        return this._msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_agreementbookingservice_ProcessSession() {
        return this._msdyn_agreementbookingservice_ProcessSession;
    };
    /**
     * Sets the msdyn_agreementbookingservice_ProcessSession property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_ProcessSession property.
     */
    public set msdyn_agreementbookingservice_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_agreementbookingservice_ProcessSession = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_agreementbookingservice_RecurringAppointmentMasters() {
        return this._msdyn_agreementbookingservice_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_agreementbookingservice_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_RecurringAppointmentMasters property.
     */
    public set msdyn_agreementbookingservice_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_agreementbookingservice_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_agreementbookingservice_ServiceAppointments() {
        return this._msdyn_agreementbookingservice_ServiceAppointments;
    };
    /**
     * Sets the msdyn_agreementbookingservice_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_ServiceAppointments property.
     */
    public set msdyn_agreementbookingservice_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_agreementbookingservice_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_agreementbookingservice_SocialActivities() {
        return this._msdyn_agreementbookingservice_SocialActivities;
    };
    /**
     * Sets the msdyn_agreementbookingservice_SocialActivities property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_SocialActivities property.
     */
    public set msdyn_agreementbookingservice_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_agreementbookingservice_SocialActivities = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_agreementbookingservice_SyncErrors() {
        return this._msdyn_agreementbookingservice_SyncErrors;
    };
    /**
     * Sets the msdyn_agreementbookingservice_SyncErrors property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_SyncErrors property.
     */
    public set msdyn_agreementbookingservice_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_agreementbookingservice_SyncErrors = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice_Tasks property value. 
     * @returns a task
     */
    public get msdyn_agreementbookingservice_Tasks() {
        return this._msdyn_agreementbookingservice_Tasks;
    };
    /**
     * Sets the msdyn_agreementbookingservice_Tasks property value. 
     * @param value Value to set for the msdyn_agreementbookingservice_Tasks property.
     */
    public set msdyn_agreementbookingservice_Tasks(value: Task[] | undefined) {
        this._msdyn_agreementbookingservice_Tasks = value;
    };
    /**
     * Gets the msdyn_agreementbookingserviceid property value. 
     * @returns a string
     */
    public get msdyn_agreementbookingserviceid() {
        return this._msdyn_agreementbookingserviceid;
    };
    /**
     * Sets the msdyn_agreementbookingserviceid property value. 
     * @param value Value to set for the msdyn_agreementbookingserviceid property.
     */
    public set msdyn_agreementbookingserviceid(value: string | undefined) {
        this._msdyn_agreementbookingserviceid = value;
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
     * Gets the msdyn_duration property value. 
     * @returns a integer
     */
    public get msdyn_duration() {
        return this._msdyn_duration;
    };
    /**
     * Sets the msdyn_duration property value. 
     * @param value Value to set for the msdyn_duration property.
     */
    public set msdyn_duration(value: number | undefined) {
        this._msdyn_duration = value;
    };
    /**
     * Gets the msdyn_durationtobill property value. 
     * @returns a integer
     */
    public get msdyn_durationtobill() {
        return this._msdyn_durationtobill;
    };
    /**
     * Sets the msdyn_durationtobill property value. 
     * @param value Value to set for the msdyn_durationtobill property.
     */
    public set msdyn_durationtobill(value: number | undefined) {
        this._msdyn_durationtobill = value;
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
     * Gets the msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService property value. 
     * @returns a msdyn_workorderservice
     */
    public get msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService() {
        return this._msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService property.
     */
    public set msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService(value: Msdyn_workorderservice[] | undefined) {
        this._msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService = value;
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
     * Gets the msdyn_service property value. 
     * @returns a product
     */
    public get msdyn_service() {
        return this._msdyn_service;
    };
    /**
     * Sets the msdyn_service property value. 
     * @param value Value to set for the msdyn_service property.
     */
    public set msdyn_service(value: Product | undefined) {
        this._msdyn_service = value;
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
        writer.writeStringValue("_msdyn_service_value", this._msdyn_service_value);
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
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_agreementbookingservice_ActivityPointers", this.msdyn_agreementbookingservice_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_agreementbookingservice_Annotations", this.msdyn_agreementbookingservice_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_agreementbookingservice_Appointments", this.msdyn_agreementbookingservice_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_agreementbookingservice_AsyncOperations", this.msdyn_agreementbookingservice_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_agreementbookingservice_BulkDeleteFailures", this.msdyn_agreementbookingservice_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingservice_connections1", this.msdyn_agreementbookingservice_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingservice_connections2", this.msdyn_agreementbookingservice_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingservice_DuplicateBaseRecord", this.msdyn_agreementbookingservice_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingservice_DuplicateMatchingRecord", this.msdyn_agreementbookingservice_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_agreementbookingservice_Emails", this.msdyn_agreementbookingservice_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_agreementbookingservice_Faxes", this.msdyn_agreementbookingservice_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_agreementbookingservice_Letters", this.msdyn_agreementbookingservice_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_agreementbookingservice_MailboxTrackingFolders", this.msdyn_agreementbookingservice_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_agreementbookingservice_msdyn_approvals", this.msdyn_agreementbookingservice_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_agreementbookingservice_msdyn_bookingalerts", this.msdyn_agreementbookingservice_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_agreementbookingservice_msdyn_ocliveworkitems", this.msdyn_agreementbookingservice_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_agreementbookingservice_msdyn_ocoutboundmessages", this.msdyn_agreementbookingservice_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_agreementbookingservice_msdyn_ocsessions", this.msdyn_agreementbookingservice_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_agreementbookingservice_msfp_alerts", this.msdyn_agreementbookingservice_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_agreementbookingservice_msfp_surveyinvites", this.msdyn_agreementbookingservice_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_agreementbookingservice_msfp_surveyresponses", this.msdyn_agreementbookingservice_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_agreementbookingservice_PhoneCalls", this.msdyn_agreementbookingservice_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses", this.msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_agreementbookingservice_ProcessSession", this.msdyn_agreementbookingservice_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_agreementbookingservice_RecurringAppointmentMasters", this.msdyn_agreementbookingservice_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_agreementbookingservice_ServiceAppointments", this.msdyn_agreementbookingservice_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_agreementbookingservice_SocialActivities", this.msdyn_agreementbookingservice_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_agreementbookingservice_SyncErrors", this.msdyn_agreementbookingservice_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_agreementbookingservice_Tasks", this.msdyn_agreementbookingservice_Tasks);
        writer.writeStringValue("msdyn_agreementbookingserviceid", this.msdyn_agreementbookingserviceid);
        writer.writeObjectValue<Msdyn_agreementbookingsetup>("msdyn_agreementbookingsetup", this.msdyn_agreementbookingsetup);
        writer.writeNumberValue("msdyn_currency", this.msdyn_currency);
        writer.writeNumberValue("msdyn_currency_base", this.msdyn_currency_base);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeNumberValue("msdyn_durationtobill", this.msdyn_durationtobill);
        writer.writeBooleanValue("msdyn_iscopied", this.msdyn_iscopied);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Msdyn_workorderservice>("msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService", this.msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeObjectValue<Product>("msdyn_service", this.msdyn_service);
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
