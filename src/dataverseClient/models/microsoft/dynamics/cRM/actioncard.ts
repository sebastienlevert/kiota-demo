import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActioncarduserstateFromDiscriminatorValue} from './createActioncarduserstateFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Actioncarduserstate, Appointment, Businessunit, Contact, Crmbaseentity, Email, Fax, Incident, Lead, Letter, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Phonecall, Principal, Recurringappointmentmaster, Serviceappointment, Systemuser, Task, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Actioncard extends Crmbaseentity implements Parsable {
    private __cardtypeid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentregardingobjectid_value?: string | undefined;
    private __recordid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _actioncardid?: string | undefined;
    private _actionCardUserState_ActionCard?: Actioncarduserstate[] | undefined;
    private _cardtype?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _data?: string | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _expirydate?: Date | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_actioncardregardingid?: string | undefined;
    private _msdyn_regardingobjectid?: string | undefined;
    private _msdyn_regardingobjectlogicalname?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _parentregardingobjectiddata?: string | undefined;
    private _priority?: number | undefined;
    private _recordidobjecttypecode2?: number | undefined;
    private _referencetokens?: string | undefined;
    private _regardingobjectid_account_actioncard?: Account | undefined;
    private _regardingobjectid_appointment_actioncard?: Appointment | undefined;
    private _regardingobjectid_contact_actioncard?: Contact | undefined;
    private _regardingobjectid_email_actioncard?: Email | undefined;
    private _regardingobjectid_fax_actioncard?: Fax | undefined;
    private _regardingobjectid_incident_actioncard?: Incident | undefined;
    private _regardingobjectid_lead_actioncard?: Lead | undefined;
    private _regardingobjectid_letter_actioncard?: Letter | undefined;
    private _regardingobjectid_msdyn_approval?: Msdyn_approval | undefined;
    private _regardingobjectid_msdyn_bookingalert?: Msdyn_bookingalert | undefined;
    private _regardingobjectid_msdyn_ocliveworkitem?: Msdyn_ocliveworkitem | undefined;
    private _regardingobjectid_msdyn_ocoutboundmessage?: Msdyn_ocoutboundmessage | undefined;
    private _regardingobjectid_msdyn_ocsession?: Msdyn_ocsession | undefined;
    private _regardingobjectid_msfp_alert?: Msfp_alert | undefined;
    private _regardingobjectid_msfp_surveyinvite?: Msfp_surveyinvite | undefined;
    private _regardingobjectid_msfp_surveyresponse?: Msfp_surveyresponse | undefined;
    private _regardingobjectid_opportunity_actioncard?: Opportunity | undefined;
    private _regardingobjectid_phonecall_actioncard?: Phonecall | undefined;
    private _regardingobjectid_recurringappointmentmaster_actioncard?: Recurringappointmentmaster | undefined;
    private _regardingobjectid_serviceappointment_actioncard?: Serviceappointment | undefined;
    private _regardingobjectid_task_actioncard?: Task | undefined;
    private _source?: number | undefined;
    private _startdate?: Date | undefined;
    private _state?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _versionnumber?: number | undefined;
    private _visibility?: boolean | undefined;
    /**
     * Gets the _cardtypeid_value property value. 
     * @returns a string
     */
    public get _cardtypeid_value() {
        return this.__cardtypeid_value;
    };
    /**
     * Sets the _cardtypeid_value property value. 
     * @param value Value to set for the _cardtypeid_value property.
     */
    public set _cardtypeid_value(value: string | undefined) {
        this.__cardtypeid_value = value;
    };
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
     * Gets the _parentregardingobjectid_value property value. 
     * @returns a string
     */
    public get _parentregardingobjectid_value() {
        return this.__parentregardingobjectid_value;
    };
    /**
     * Sets the _parentregardingobjectid_value property value. 
     * @param value Value to set for the _parentregardingobjectid_value property.
     */
    public set _parentregardingobjectid_value(value: string | undefined) {
        this.__parentregardingobjectid_value = value;
    };
    /**
     * Gets the _recordid_value property value. 
     * @returns a string
     */
    public get _recordid_value() {
        return this.__recordid_value;
    };
    /**
     * Sets the _recordid_value property value. 
     * @param value Value to set for the _recordid_value property.
     */
    public set _recordid_value(value: string | undefined) {
        this.__recordid_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
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
     * Gets the actioncardid property value. 
     * @returns a string
     */
    public get actioncardid() {
        return this._actioncardid;
    };
    /**
     * Sets the actioncardid property value. 
     * @param value Value to set for the actioncardid property.
     */
    public set actioncardid(value: string | undefined) {
        this._actioncardid = value;
    };
    /**
     * Gets the actionCardUserState_ActionCard property value. 
     * @returns a actioncarduserstate
     */
    public get actionCardUserState_ActionCard() {
        return this._actionCardUserState_ActionCard;
    };
    /**
     * Sets the actionCardUserState_ActionCard property value. 
     * @param value Value to set for the ActionCardUserState_ActionCard property.
     */
    public set actionCardUserState_ActionCard(value: Actioncarduserstate[] | undefined) {
        this._actionCardUserState_ActionCard = value;
    };
    /**
     * Gets the cardtype property value. 
     * @returns a integer
     */
    public get cardtype() {
        return this._cardtype;
    };
    /**
     * Sets the cardtype property value. 
     * @param value Value to set for the cardtype property.
     */
    public set cardtype(value: number | undefined) {
        this._cardtype = value;
    };
    /**
     * Instantiates a new actioncard and sets the default values.
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
     * Gets the data property value. 
     * @returns a string
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. 
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
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
     * Gets the expirydate property value. 
     * @returns a Date
     */
    public get expirydate() {
        return this._expirydate;
    };
    /**
     * Sets the expirydate property value. 
     * @param value Value to set for the expirydate property.
     */
    public set expirydate(value: Date | undefined) {
        this._expirydate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_cardtypeid_value": (o, n) => { (o as unknown as Actioncard)._cardtypeid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Actioncard)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Actioncard)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Actioncard)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Actioncard)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Actioncard)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Actioncard)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Actioncard)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Actioncard)._owninguser_value = n.getStringValue(); },
            "_parentregardingobjectid_value": (o, n) => { (o as unknown as Actioncard)._parentregardingobjectid_value = n.getStringValue(); },
            "_recordid_value": (o, n) => { (o as unknown as Actioncard)._recordid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Actioncard)._regardingobjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Actioncard)._transactioncurrencyid_value = n.getStringValue(); },
            "actioncardid": (o, n) => { (o as unknown as Actioncard).actioncardid = n.getStringValue(); },
            "actionCardUserState_ActionCard": (o, n) => { (o as unknown as Actioncard).actionCardUserState_ActionCard = n.getCollectionOfObjectValues<Actioncarduserstate>(createActioncarduserstateFromDiscriminatorValue); },
            "cardtype": (o, n) => { (o as unknown as Actioncard).cardtype = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Actioncard).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Actioncard).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Actioncard).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "data": (o, n) => { (o as unknown as Actioncard).data = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Actioncard).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Actioncard).exchangerate = n.getNumberValue(); },
            "expirydate": (o, n) => { (o as unknown as Actioncard).expirydate = n.getDateValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Actioncard).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Actioncard).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Actioncard).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Actioncard).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actioncardregardingid": (o, n) => { (o as unknown as Actioncard).msdyn_actioncardregardingid = n.getStringValue(); },
            "msdyn_regardingobjectid": (o, n) => { (o as unknown as Actioncard).msdyn_regardingobjectid = n.getStringValue(); },
            "msdyn_regardingobjectlogicalname": (o, n) => { (o as unknown as Actioncard).msdyn_regardingobjectlogicalname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Actioncard).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Actioncard).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Actioncard).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "parentregardingobjectiddata": (o, n) => { (o as unknown as Actioncard).parentregardingobjectiddata = n.getStringValue(); },
            "priority": (o, n) => { (o as unknown as Actioncard).priority = n.getNumberValue(); },
            "recordidobjecttypecode2": (o, n) => { (o as unknown as Actioncard).recordidobjecttypecode2 = n.getNumberValue(); },
            "referencetokens": (o, n) => { (o as unknown as Actioncard).referencetokens = n.getStringValue(); },
            "regardingobjectid_account_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_account_actioncard = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_appointment_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_appointment_actioncard = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "regardingobjectid_contact_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_contact_actioncard = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_email_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_email_actioncard = n.getObjectValue<Email>(createEmailFromDiscriminatorValue); },
            "regardingobjectid_fax_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_fax_actioncard = n.getObjectValue<Fax>(createFaxFromDiscriminatorValue); },
            "regardingobjectid_incident_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_incident_actioncard = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_lead_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_lead_actioncard = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_letter_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_letter_actioncard = n.getObjectValue<Letter>(createLetterFromDiscriminatorValue); },
            "regardingobjectid_msdyn_approval": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msdyn_approval = n.getObjectValue<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "regardingobjectid_msdyn_bookingalert": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msdyn_bookingalert = n.getObjectValue<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "regardingobjectid_msdyn_ocliveworkitem": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msdyn_ocliveworkitem = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "regardingobjectid_msdyn_ocoutboundmessage": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msdyn_ocoutboundmessage = n.getObjectValue<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "regardingobjectid_msdyn_ocsession": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msdyn_ocsession = n.getObjectValue<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "regardingobjectid_msfp_alert": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msfp_alert = n.getObjectValue<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "regardingobjectid_msfp_surveyinvite": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msfp_surveyinvite = n.getObjectValue<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "regardingobjectid_msfp_surveyresponse": (o, n) => { (o as unknown as Actioncard).regardingobjectid_msfp_surveyresponse = n.getObjectValue<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "regardingobjectid_opportunity_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_opportunity_actioncard = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_phonecall_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_phonecall_actioncard = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "regardingobjectid_recurringappointmentmaster_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_recurringappointmentmaster_actioncard = n.getObjectValue<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "regardingobjectid_serviceappointment_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_serviceappointment_actioncard = n.getObjectValue<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "regardingobjectid_task_actioncard": (o, n) => { (o as unknown as Actioncard).regardingobjectid_task_actioncard = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
            "source": (o, n) => { (o as unknown as Actioncard).source = n.getNumberValue(); },
            "startdate": (o, n) => { (o as unknown as Actioncard).startdate = n.getDateValue(); },
            "state": (o, n) => { (o as unknown as Actioncard).state = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Actioncard).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Actioncard).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Actioncard).versionnumber = n.getNumberValue(); },
            "visibility": (o, n) => { (o as unknown as Actioncard).visibility = n.getBooleanValue(); },
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
     * Gets the msdyn_actioncardregardingid property value. 
     * @returns a string
     */
    public get msdyn_actioncardregardingid() {
        return this._msdyn_actioncardregardingid;
    };
    /**
     * Sets the msdyn_actioncardregardingid property value. 
     * @param value Value to set for the msdyn_actioncardregardingid property.
     */
    public set msdyn_actioncardregardingid(value: string | undefined) {
        this._msdyn_actioncardregardingid = value;
    };
    /**
     * Gets the msdyn_regardingobjectid property value. 
     * @returns a string
     */
    public get msdyn_regardingobjectid() {
        return this._msdyn_regardingobjectid;
    };
    /**
     * Sets the msdyn_regardingobjectid property value. 
     * @param value Value to set for the msdyn_regardingobjectid property.
     */
    public set msdyn_regardingobjectid(value: string | undefined) {
        this._msdyn_regardingobjectid = value;
    };
    /**
     * Gets the msdyn_regardingobjectlogicalname property value. 
     * @returns a string
     */
    public get msdyn_regardingobjectlogicalname() {
        return this._msdyn_regardingobjectlogicalname;
    };
    /**
     * Sets the msdyn_regardingobjectlogicalname property value. 
     * @param value Value to set for the msdyn_regardingobjectlogicalname property.
     */
    public set msdyn_regardingobjectlogicalname(value: string | undefined) {
        this._msdyn_regardingobjectlogicalname = value;
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
     * Gets the parentregardingobjectiddata property value. 
     * @returns a string
     */
    public get parentregardingobjectiddata() {
        return this._parentregardingobjectiddata;
    };
    /**
     * Sets the parentregardingobjectiddata property value. 
     * @param value Value to set for the parentregardingobjectiddata property.
     */
    public set parentregardingobjectiddata(value: string | undefined) {
        this._parentregardingobjectiddata = value;
    };
    /**
     * Gets the priority property value. 
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. 
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Gets the recordidobjecttypecode2 property value. 
     * @returns a integer
     */
    public get recordidobjecttypecode2() {
        return this._recordidobjecttypecode2;
    };
    /**
     * Sets the recordidobjecttypecode2 property value. 
     * @param value Value to set for the recordidobjecttypecode2 property.
     */
    public set recordidobjecttypecode2(value: number | undefined) {
        this._recordidobjecttypecode2 = value;
    };
    /**
     * Gets the referencetokens property value. 
     * @returns a string
     */
    public get referencetokens() {
        return this._referencetokens;
    };
    /**
     * Sets the referencetokens property value. 
     * @param value Value to set for the referencetokens property.
     */
    public set referencetokens(value: string | undefined) {
        this._referencetokens = value;
    };
    /**
     * Gets the regardingobjectid_account_actioncard property value. 
     * @returns a account
     */
    public get regardingobjectid_account_actioncard() {
        return this._regardingobjectid_account_actioncard;
    };
    /**
     * Sets the regardingobjectid_account_actioncard property value. 
     * @param value Value to set for the regardingobjectid_account_actioncard property.
     */
    public set regardingobjectid_account_actioncard(value: Account | undefined) {
        this._regardingobjectid_account_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_appointment_actioncard property value. 
     * @returns a appointment
     */
    public get regardingobjectid_appointment_actioncard() {
        return this._regardingobjectid_appointment_actioncard;
    };
    /**
     * Sets the regardingobjectid_appointment_actioncard property value. 
     * @param value Value to set for the regardingobjectid_appointment_actioncard property.
     */
    public set regardingobjectid_appointment_actioncard(value: Appointment | undefined) {
        this._regardingobjectid_appointment_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_contact_actioncard property value. 
     * @returns a contact
     */
    public get regardingobjectid_contact_actioncard() {
        return this._regardingobjectid_contact_actioncard;
    };
    /**
     * Sets the regardingobjectid_contact_actioncard property value. 
     * @param value Value to set for the regardingobjectid_contact_actioncard property.
     */
    public set regardingobjectid_contact_actioncard(value: Contact | undefined) {
        this._regardingobjectid_contact_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_email_actioncard property value. 
     * @returns a email
     */
    public get regardingobjectid_email_actioncard() {
        return this._regardingobjectid_email_actioncard;
    };
    /**
     * Sets the regardingobjectid_email_actioncard property value. 
     * @param value Value to set for the regardingobjectid_email_actioncard property.
     */
    public set regardingobjectid_email_actioncard(value: Email | undefined) {
        this._regardingobjectid_email_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_fax_actioncard property value. 
     * @returns a fax
     */
    public get regardingobjectid_fax_actioncard() {
        return this._regardingobjectid_fax_actioncard;
    };
    /**
     * Sets the regardingobjectid_fax_actioncard property value. 
     * @param value Value to set for the regardingobjectid_fax_actioncard property.
     */
    public set regardingobjectid_fax_actioncard(value: Fax | undefined) {
        this._regardingobjectid_fax_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_incident_actioncard property value. 
     * @returns a incident
     */
    public get regardingobjectid_incident_actioncard() {
        return this._regardingobjectid_incident_actioncard;
    };
    /**
     * Sets the regardingobjectid_incident_actioncard property value. 
     * @param value Value to set for the regardingobjectid_incident_actioncard property.
     */
    public set regardingobjectid_incident_actioncard(value: Incident | undefined) {
        this._regardingobjectid_incident_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_lead_actioncard property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_actioncard() {
        return this._regardingobjectid_lead_actioncard;
    };
    /**
     * Sets the regardingobjectid_lead_actioncard property value. 
     * @param value Value to set for the regardingobjectid_lead_actioncard property.
     */
    public set regardingobjectid_lead_actioncard(value: Lead | undefined) {
        this._regardingobjectid_lead_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_letter_actioncard property value. 
     * @returns a letter
     */
    public get regardingobjectid_letter_actioncard() {
        return this._regardingobjectid_letter_actioncard;
    };
    /**
     * Sets the regardingobjectid_letter_actioncard property value. 
     * @param value Value to set for the regardingobjectid_letter_actioncard property.
     */
    public set regardingobjectid_letter_actioncard(value: Letter | undefined) {
        this._regardingobjectid_letter_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_approval property value. 
     * @returns a msdyn_approval
     */
    public get regardingobjectid_msdyn_approval() {
        return this._regardingobjectid_msdyn_approval;
    };
    /**
     * Sets the regardingobjectid_msdyn_approval property value. 
     * @param value Value to set for the regardingobjectid_msdyn_approval property.
     */
    public set regardingobjectid_msdyn_approval(value: Msdyn_approval | undefined) {
        this._regardingobjectid_msdyn_approval = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_bookingalert property value. 
     * @returns a msdyn_bookingalert
     */
    public get regardingobjectid_msdyn_bookingalert() {
        return this._regardingobjectid_msdyn_bookingalert;
    };
    /**
     * Sets the regardingobjectid_msdyn_bookingalert property value. 
     * @param value Value to set for the regardingobjectid_msdyn_bookingalert property.
     */
    public set regardingobjectid_msdyn_bookingalert(value: Msdyn_bookingalert | undefined) {
        this._regardingobjectid_msdyn_bookingalert = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_ocliveworkitem property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get regardingobjectid_msdyn_ocliveworkitem() {
        return this._regardingobjectid_msdyn_ocliveworkitem;
    };
    /**
     * Sets the regardingobjectid_msdyn_ocliveworkitem property value. 
     * @param value Value to set for the regardingobjectid_msdyn_ocliveworkitem property.
     */
    public set regardingobjectid_msdyn_ocliveworkitem(value: Msdyn_ocliveworkitem | undefined) {
        this._regardingobjectid_msdyn_ocliveworkitem = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_ocoutboundmessage property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get regardingobjectid_msdyn_ocoutboundmessage() {
        return this._regardingobjectid_msdyn_ocoutboundmessage;
    };
    /**
     * Sets the regardingobjectid_msdyn_ocoutboundmessage property value. 
     * @param value Value to set for the regardingobjectid_msdyn_ocoutboundmessage property.
     */
    public set regardingobjectid_msdyn_ocoutboundmessage(value: Msdyn_ocoutboundmessage | undefined) {
        this._regardingobjectid_msdyn_ocoutboundmessage = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_ocsession property value. 
     * @returns a msdyn_ocsession
     */
    public get regardingobjectid_msdyn_ocsession() {
        return this._regardingobjectid_msdyn_ocsession;
    };
    /**
     * Sets the regardingobjectid_msdyn_ocsession property value. 
     * @param value Value to set for the regardingobjectid_msdyn_ocsession property.
     */
    public set regardingobjectid_msdyn_ocsession(value: Msdyn_ocsession | undefined) {
        this._regardingobjectid_msdyn_ocsession = value;
    };
    /**
     * Gets the regardingobjectid_msfp_alert property value. 
     * @returns a msfp_alert
     */
    public get regardingobjectid_msfp_alert() {
        return this._regardingobjectid_msfp_alert;
    };
    /**
     * Sets the regardingobjectid_msfp_alert property value. 
     * @param value Value to set for the regardingobjectid_msfp_alert property.
     */
    public set regardingobjectid_msfp_alert(value: Msfp_alert | undefined) {
        this._regardingobjectid_msfp_alert = value;
    };
    /**
     * Gets the regardingobjectid_msfp_surveyinvite property value. 
     * @returns a msfp_surveyinvite
     */
    public get regardingobjectid_msfp_surveyinvite() {
        return this._regardingobjectid_msfp_surveyinvite;
    };
    /**
     * Sets the regardingobjectid_msfp_surveyinvite property value. 
     * @param value Value to set for the regardingobjectid_msfp_surveyinvite property.
     */
    public set regardingobjectid_msfp_surveyinvite(value: Msfp_surveyinvite | undefined) {
        this._regardingobjectid_msfp_surveyinvite = value;
    };
    /**
     * Gets the regardingobjectid_msfp_surveyresponse property value. 
     * @returns a msfp_surveyresponse
     */
    public get regardingobjectid_msfp_surveyresponse() {
        return this._regardingobjectid_msfp_surveyresponse;
    };
    /**
     * Sets the regardingobjectid_msfp_surveyresponse property value. 
     * @param value Value to set for the regardingobjectid_msfp_surveyresponse property.
     */
    public set regardingobjectid_msfp_surveyresponse(value: Msfp_surveyresponse | undefined) {
        this._regardingobjectid_msfp_surveyresponse = value;
    };
    /**
     * Gets the regardingobjectid_opportunity_actioncard property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity_actioncard() {
        return this._regardingobjectid_opportunity_actioncard;
    };
    /**
     * Sets the regardingobjectid_opportunity_actioncard property value. 
     * @param value Value to set for the regardingobjectid_opportunity_actioncard property.
     */
    public set regardingobjectid_opportunity_actioncard(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_phonecall_actioncard property value. 
     * @returns a phonecall
     */
    public get regardingobjectid_phonecall_actioncard() {
        return this._regardingobjectid_phonecall_actioncard;
    };
    /**
     * Sets the regardingobjectid_phonecall_actioncard property value. 
     * @param value Value to set for the regardingobjectid_phonecall_actioncard property.
     */
    public set regardingobjectid_phonecall_actioncard(value: Phonecall | undefined) {
        this._regardingobjectid_phonecall_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_recurringappointmentmaster_actioncard property value. 
     * @returns a recurringappointmentmaster
     */
    public get regardingobjectid_recurringappointmentmaster_actioncard() {
        return this._regardingobjectid_recurringappointmentmaster_actioncard;
    };
    /**
     * Sets the regardingobjectid_recurringappointmentmaster_actioncard property value. 
     * @param value Value to set for the regardingobjectid_recurringappointmentmaster_actioncard property.
     */
    public set regardingobjectid_recurringappointmentmaster_actioncard(value: Recurringappointmentmaster | undefined) {
        this._regardingobjectid_recurringappointmentmaster_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_serviceappointment_actioncard property value. 
     * @returns a serviceappointment
     */
    public get regardingobjectid_serviceappointment_actioncard() {
        return this._regardingobjectid_serviceappointment_actioncard;
    };
    /**
     * Sets the regardingobjectid_serviceappointment_actioncard property value. 
     * @param value Value to set for the regardingobjectid_serviceappointment_actioncard property.
     */
    public set regardingobjectid_serviceappointment_actioncard(value: Serviceappointment | undefined) {
        this._regardingobjectid_serviceappointment_actioncard = value;
    };
    /**
     * Gets the regardingobjectid_task_actioncard property value. 
     * @returns a task
     */
    public get regardingobjectid_task_actioncard() {
        return this._regardingobjectid_task_actioncard;
    };
    /**
     * Sets the regardingobjectid_task_actioncard property value. 
     * @param value Value to set for the regardingobjectid_task_actioncard property.
     */
    public set regardingobjectid_task_actioncard(value: Task | undefined) {
        this._regardingobjectid_task_actioncard = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_cardtypeid_value", this._cardtypeid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentregardingobjectid_value", this._parentregardingobjectid_value);
        writer.writeStringValue("_recordid_value", this._recordid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("actioncardid", this.actioncardid);
        writer.writeCollectionOfObjectValues<Actioncarduserstate>("actionCardUserState_ActionCard", this.actionCardUserState_ActionCard);
        writer.writeNumberValue("cardtype", this.cardtype);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("data", this.data);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeDateValue("expirydate", this.expirydate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_actioncardregardingid", this.msdyn_actioncardregardingid);
        writer.writeStringValue("msdyn_regardingobjectid", this.msdyn_regardingobjectid);
        writer.writeStringValue("msdyn_regardingobjectlogicalname", this.msdyn_regardingobjectlogicalname);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("parentregardingobjectiddata", this.parentregardingobjectiddata);
        writer.writeNumberValue("priority", this.priority);
        writer.writeNumberValue("recordidobjecttypecode2", this.recordidobjecttypecode2);
        writer.writeStringValue("referencetokens", this.referencetokens);
        writer.writeObjectValue<Account>("regardingobjectid_account_actioncard", this.regardingobjectid_account_actioncard);
        writer.writeObjectValue<Appointment>("regardingobjectid_appointment_actioncard", this.regardingobjectid_appointment_actioncard);
        writer.writeObjectValue<Contact>("regardingobjectid_contact_actioncard", this.regardingobjectid_contact_actioncard);
        writer.writeObjectValue<Email>("regardingobjectid_email_actioncard", this.regardingobjectid_email_actioncard);
        writer.writeObjectValue<Fax>("regardingobjectid_fax_actioncard", this.regardingobjectid_fax_actioncard);
        writer.writeObjectValue<Incident>("regardingobjectid_incident_actioncard", this.regardingobjectid_incident_actioncard);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_actioncard", this.regardingobjectid_lead_actioncard);
        writer.writeObjectValue<Letter>("regardingobjectid_letter_actioncard", this.regardingobjectid_letter_actioncard);
        writer.writeObjectValue<Msdyn_approval>("regardingobjectid_msdyn_approval", this.regardingobjectid_msdyn_approval);
        writer.writeObjectValue<Msdyn_bookingalert>("regardingobjectid_msdyn_bookingalert", this.regardingobjectid_msdyn_bookingalert);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("regardingobjectid_msdyn_ocliveworkitem", this.regardingobjectid_msdyn_ocliveworkitem);
        writer.writeObjectValue<Msdyn_ocoutboundmessage>("regardingobjectid_msdyn_ocoutboundmessage", this.regardingobjectid_msdyn_ocoutboundmessage);
        writer.writeObjectValue<Msdyn_ocsession>("regardingobjectid_msdyn_ocsession", this.regardingobjectid_msdyn_ocsession);
        writer.writeObjectValue<Msfp_alert>("regardingobjectid_msfp_alert", this.regardingobjectid_msfp_alert);
        writer.writeObjectValue<Msfp_surveyinvite>("regardingobjectid_msfp_surveyinvite", this.regardingobjectid_msfp_surveyinvite);
        writer.writeObjectValue<Msfp_surveyresponse>("regardingobjectid_msfp_surveyresponse", this.regardingobjectid_msfp_surveyresponse);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity_actioncard", this.regardingobjectid_opportunity_actioncard);
        writer.writeObjectValue<Phonecall>("regardingobjectid_phonecall_actioncard", this.regardingobjectid_phonecall_actioncard);
        writer.writeObjectValue<Recurringappointmentmaster>("regardingobjectid_recurringappointmentmaster_actioncard", this.regardingobjectid_recurringappointmentmaster_actioncard);
        writer.writeObjectValue<Serviceappointment>("regardingobjectid_serviceappointment_actioncard", this.regardingobjectid_serviceappointment_actioncard);
        writer.writeObjectValue<Task>("regardingobjectid_task_actioncard", this.regardingobjectid_task_actioncard);
        writer.writeNumberValue("source", this.source);
        writer.writeDateValue("startdate", this.startdate);
        writer.writeNumberValue("state", this.state);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeBooleanValue("visibility", this.visibility);
    };
    /**
     * Gets the source property value. 
     * @returns a integer
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: number | undefined) {
        this._source = value;
    };
    /**
     * Gets the startdate property value. 
     * @returns a Date
     */
    public get startdate() {
        return this._startdate;
    };
    /**
     * Sets the startdate property value. 
     * @param value Value to set for the startdate property.
     */
    public set startdate(value: Date | undefined) {
        this._startdate = value;
    };
    /**
     * Gets the state property value. 
     * @returns a integer
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. 
     * @param value Value to set for the state property.
     */
    public set state(value: number | undefined) {
        this._state = value;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
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
    /**
     * Gets the visibility property value. 
     * @returns a boolean
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. 
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: boolean | undefined) {
        this._visibility = value;
    };
}
