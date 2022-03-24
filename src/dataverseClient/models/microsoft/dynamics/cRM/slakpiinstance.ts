import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSlaitemFromDiscriminatorValue} from './createSlaitemFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activitypointer, Appointment, Businessunit, Contact, Crmbaseentity, Email, Fax, Incident, Invoice, Lead, Letter, Msdyn_workorder, Opportunity, Phonecall, Principal, Quote, Salesorder, Serviceappointment, Slaitem, Socialactivity, Syncerror, Systemuser, Task, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Slakpiinstance extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_slaitemid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regarding_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _applicablefromvalue?: Date | undefined;
    private _computedfailuretime?: Date | undefined;
    private _computedwarningtime?: Date | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _elapsedtime?: number | undefined;
    private _exchangerate?: number | undefined;
    private _failuretime?: Date | undefined;
    private _lastresumetime?: Date | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_actionexecutionstatus?: number | undefined;
    private _msdyn_calendarid?: string | undefined;
    private _msdyn_prevslakpiinstanceid?: string | undefined;
    private _msdyn_slaitemid?: Slaitem | undefined;
    private _msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi?: Msdyn_workorder[] | undefined;
    private _msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid?: Msdyn_workorder[] | undefined;
    private _name?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _pausedon?: Date | undefined;
    private _regarding?: Incident | undefined;
    private _regarding_account?: Account | undefined;
    private _regarding_activitypointer?: Activitypointer | undefined;
    private _regarding_appointment?: Appointment | undefined;
    private _regarding_contact?: Contact | undefined;
    private _regarding_email?: Email | undefined;
    private _regarding_fax?: Fax | undefined;
    private _regarding_invoice?: Invoice | undefined;
    private _regarding_lead?: Lead | undefined;
    private _regarding_letter?: Letter | undefined;
    private _regarding_opportunity?: Opportunity | undefined;
    private _regarding_phonecall?: Phonecall | undefined;
    private _regarding_quote?: Quote | undefined;
    private _regarding_salesorder?: Salesorder | undefined;
    private _regarding_serviceappointment?: Serviceappointment | undefined;
    private _regarding_socialactivity?: Socialactivity | undefined;
    private _regarding_task?: Task | undefined;
    private _regardingentityid?: string | undefined;
    private _slakpiinstance_incident_firstresponsebykpi?: Incident[] | undefined;
    private _slakpiinstance_incident_resolvebykpi?: Incident[] | undefined;
    private _sLAKPIInstance_SyncErrors?: Syncerror[] | undefined;
    private _slakpiinstanceid?: string | undefined;
    private _status?: number | undefined;
    private _succeededon?: Date | undefined;
    private _successcheckedat?: Date | undefined;
    private _terminalstatereached?: boolean | undefined;
    private _terminalstatetime?: Date | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _versionnumber?: number | undefined;
    private _warningtime?: Date | undefined;
    private _warningtimereached?: number | undefined;
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
     * Gets the _msdyn_slaitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_slaitemid_value() {
        return this.__msdyn_slaitemid_value;
    };
    /**
     * Sets the _msdyn_slaitemid_value property value. 
     * @param value Value to set for the _msdyn_slaitemid_value property.
     */
    public set _msdyn_slaitemid_value(value: string | undefined) {
        this.__msdyn_slaitemid_value = value;
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
     * Gets the _regarding_value property value. 
     * @returns a string
     */
    public get _regarding_value() {
        return this.__regarding_value;
    };
    /**
     * Sets the _regarding_value property value. 
     * @param value Value to set for the _regarding_value property.
     */
    public set _regarding_value(value: string | undefined) {
        this.__regarding_value = value;
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
     * Gets the applicablefromvalue property value. 
     * @returns a Date
     */
    public get applicablefromvalue() {
        return this._applicablefromvalue;
    };
    /**
     * Sets the applicablefromvalue property value. 
     * @param value Value to set for the applicablefromvalue property.
     */
    public set applicablefromvalue(value: Date | undefined) {
        this._applicablefromvalue = value;
    };
    /**
     * Gets the computedfailuretime property value. 
     * @returns a Date
     */
    public get computedfailuretime() {
        return this._computedfailuretime;
    };
    /**
     * Sets the computedfailuretime property value. 
     * @param value Value to set for the computedfailuretime property.
     */
    public set computedfailuretime(value: Date | undefined) {
        this._computedfailuretime = value;
    };
    /**
     * Gets the computedwarningtime property value. 
     * @returns a Date
     */
    public get computedwarningtime() {
        return this._computedwarningtime;
    };
    /**
     * Sets the computedwarningtime property value. 
     * @param value Value to set for the computedwarningtime property.
     */
    public set computedwarningtime(value: Date | undefined) {
        this._computedwarningtime = value;
    };
    /**
     * Instantiates a new slakpiinstance and sets the default values.
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
     * Gets the elapsedtime property value. 
     * @returns a integer
     */
    public get elapsedtime() {
        return this._elapsedtime;
    };
    /**
     * Sets the elapsedtime property value. 
     * @param value Value to set for the elapsedtime property.
     */
    public set elapsedtime(value: number | undefined) {
        this._elapsedtime = value;
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
     * Gets the failuretime property value. 
     * @returns a Date
     */
    public get failuretime() {
        return this._failuretime;
    };
    /**
     * Sets the failuretime property value. 
     * @param value Value to set for the failuretime property.
     */
    public set failuretime(value: Date | undefined) {
        this._failuretime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Slakpiinstance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Slakpiinstance)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Slakpiinstance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Slakpiinstance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_slaitemid_value": (o, n) => { (o as unknown as Slakpiinstance)._msdyn_slaitemid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Slakpiinstance)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Slakpiinstance)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Slakpiinstance)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Slakpiinstance)._owninguser_value = n.getStringValue(); },
            "_regarding_value": (o, n) => { (o as unknown as Slakpiinstance)._regarding_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Slakpiinstance)._transactioncurrencyid_value = n.getStringValue(); },
            "applicablefromvalue": (o, n) => { (o as unknown as Slakpiinstance).applicablefromvalue = n.getDateValue(); },
            "computedfailuretime": (o, n) => { (o as unknown as Slakpiinstance).computedfailuretime = n.getDateValue(); },
            "computedwarningtime": (o, n) => { (o as unknown as Slakpiinstance).computedwarningtime = n.getDateValue(); },
            "createdby": (o, n) => { (o as unknown as Slakpiinstance).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Slakpiinstance).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Slakpiinstance).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Slakpiinstance).description = n.getStringValue(); },
            "elapsedtime": (o, n) => { (o as unknown as Slakpiinstance).elapsedtime = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Slakpiinstance).exchangerate = n.getNumberValue(); },
            "failuretime": (o, n) => { (o as unknown as Slakpiinstance).failuretime = n.getDateValue(); },
            "lastresumetime": (o, n) => { (o as unknown as Slakpiinstance).lastresumetime = n.getDateValue(); },
            "modifiedby": (o, n) => { (o as unknown as Slakpiinstance).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Slakpiinstance).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Slakpiinstance).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actionexecutionstatus": (o, n) => { (o as unknown as Slakpiinstance).msdyn_actionexecutionstatus = n.getNumberValue(); },
            "msdyn_calendarid": (o, n) => { (o as unknown as Slakpiinstance).msdyn_calendarid = n.getStringValue(); },
            "msdyn_prevslakpiinstanceid": (o, n) => { (o as unknown as Slakpiinstance).msdyn_prevslakpiinstanceid = n.getStringValue(); },
            "msdyn_slaitemid": (o, n) => { (o as unknown as Slakpiinstance).msdyn_slaitemid = n.getObjectValue<Slaitem>(createSlaitemFromDiscriminatorValue); },
            "msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi": (o, n) => { (o as unknown as Slakpiinstance).msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid": (o, n) => { (o as unknown as Slakpiinstance).msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Slakpiinstance).name = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Slakpiinstance).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Slakpiinstance).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "pausedon": (o, n) => { (o as unknown as Slakpiinstance).pausedon = n.getDateValue(); },
            "regarding": (o, n) => { (o as unknown as Slakpiinstance).regarding = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regarding_account": (o, n) => { (o as unknown as Slakpiinstance).regarding_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regarding_activitypointer": (o, n) => { (o as unknown as Slakpiinstance).regarding_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "regarding_appointment": (o, n) => { (o as unknown as Slakpiinstance).regarding_appointment = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "regarding_contact": (o, n) => { (o as unknown as Slakpiinstance).regarding_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regarding_email": (o, n) => { (o as unknown as Slakpiinstance).regarding_email = n.getObjectValue<Email>(createEmailFromDiscriminatorValue); },
            "regarding_fax": (o, n) => { (o as unknown as Slakpiinstance).regarding_fax = n.getObjectValue<Fax>(createFaxFromDiscriminatorValue); },
            "regarding_invoice": (o, n) => { (o as unknown as Slakpiinstance).regarding_invoice = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "regarding_lead": (o, n) => { (o as unknown as Slakpiinstance).regarding_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regarding_letter": (o, n) => { (o as unknown as Slakpiinstance).regarding_letter = n.getObjectValue<Letter>(createLetterFromDiscriminatorValue); },
            "regarding_opportunity": (o, n) => { (o as unknown as Slakpiinstance).regarding_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regarding_phonecall": (o, n) => { (o as unknown as Slakpiinstance).regarding_phonecall = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "regarding_quote": (o, n) => { (o as unknown as Slakpiinstance).regarding_quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "regarding_salesorder": (o, n) => { (o as unknown as Slakpiinstance).regarding_salesorder = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "regarding_serviceappointment": (o, n) => { (o as unknown as Slakpiinstance).regarding_serviceappointment = n.getObjectValue<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "regarding_socialactivity": (o, n) => { (o as unknown as Slakpiinstance).regarding_socialactivity = n.getObjectValue<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "regarding_task": (o, n) => { (o as unknown as Slakpiinstance).regarding_task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
            "regardingentityid": (o, n) => { (o as unknown as Slakpiinstance).regardingentityid = n.getStringValue(); },
            "slakpiinstance_incident_firstresponsebykpi": (o, n) => { (o as unknown as Slakpiinstance).slakpiinstance_incident_firstresponsebykpi = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "slakpiinstance_incident_resolvebykpi": (o, n) => { (o as unknown as Slakpiinstance).slakpiinstance_incident_resolvebykpi = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "sLAKPIInstance_SyncErrors": (o, n) => { (o as unknown as Slakpiinstance).sLAKPIInstance_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "slakpiinstanceid": (o, n) => { (o as unknown as Slakpiinstance).slakpiinstanceid = n.getStringValue(); },
            "status": (o, n) => { (o as unknown as Slakpiinstance).status = n.getNumberValue(); },
            "succeededon": (o, n) => { (o as unknown as Slakpiinstance).succeededon = n.getDateValue(); },
            "successcheckedat": (o, n) => { (o as unknown as Slakpiinstance).successcheckedat = n.getDateValue(); },
            "terminalstatereached": (o, n) => { (o as unknown as Slakpiinstance).terminalstatereached = n.getBooleanValue(); },
            "terminalstatetime": (o, n) => { (o as unknown as Slakpiinstance).terminalstatetime = n.getDateValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Slakpiinstance).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Slakpiinstance).versionnumber = n.getNumberValue(); },
            "warningtime": (o, n) => { (o as unknown as Slakpiinstance).warningtime = n.getDateValue(); },
            "warningtimereached": (o, n) => { (o as unknown as Slakpiinstance).warningtimereached = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastresumetime property value. 
     * @returns a Date
     */
    public get lastresumetime() {
        return this._lastresumetime;
    };
    /**
     * Sets the lastresumetime property value. 
     * @param value Value to set for the lastresumetime property.
     */
    public set lastresumetime(value: Date | undefined) {
        this._lastresumetime = value;
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
     * Gets the msdyn_actionexecutionstatus property value. 
     * @returns a integer
     */
    public get msdyn_actionexecutionstatus() {
        return this._msdyn_actionexecutionstatus;
    };
    /**
     * Sets the msdyn_actionexecutionstatus property value. 
     * @param value Value to set for the msdyn_actionexecutionstatus property.
     */
    public set msdyn_actionexecutionstatus(value: number | undefined) {
        this._msdyn_actionexecutionstatus = value;
    };
    /**
     * Gets the msdyn_calendarid property value. 
     * @returns a string
     */
    public get msdyn_calendarid() {
        return this._msdyn_calendarid;
    };
    /**
     * Sets the msdyn_calendarid property value. 
     * @param value Value to set for the msdyn_calendarid property.
     */
    public set msdyn_calendarid(value: string | undefined) {
        this._msdyn_calendarid = value;
    };
    /**
     * Gets the msdyn_prevslakpiinstanceid property value. 
     * @returns a string
     */
    public get msdyn_prevslakpiinstanceid() {
        return this._msdyn_prevslakpiinstanceid;
    };
    /**
     * Sets the msdyn_prevslakpiinstanceid property value. 
     * @param value Value to set for the msdyn_prevslakpiinstanceid property.
     */
    public set msdyn_prevslakpiinstanceid(value: string | undefined) {
        this._msdyn_prevslakpiinstanceid = value;
    };
    /**
     * Gets the msdyn_slaitemid property value. 
     * @returns a slaitem
     */
    public get msdyn_slaitemid() {
        return this._msdyn_slaitemid;
    };
    /**
     * Sets the msdyn_slaitemid property value. 
     * @param value Value to set for the msdyn_slaitemid property.
     */
    public set msdyn_slaitemid(value: Slaitem | undefined) {
        this._msdyn_slaitemid = value;
    };
    /**
     * Gets the msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi() {
        return this._msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi;
    };
    /**
     * Sets the msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi property value. 
     * @param value Value to set for the msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi property.
     */
    public set msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi(value: Msdyn_workorder[] | undefined) {
        this._msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi = value;
    };
    /**
     * Gets the msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid() {
        return this._msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid;
    };
    /**
     * Sets the msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid property value. 
     * @param value Value to set for the msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid property.
     */
    public set msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid(value: Msdyn_workorder[] | undefined) {
        this._msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the pausedon property value. 
     * @returns a Date
     */
    public get pausedon() {
        return this._pausedon;
    };
    /**
     * Sets the pausedon property value. 
     * @param value Value to set for the pausedon property.
     */
    public set pausedon(value: Date | undefined) {
        this._pausedon = value;
    };
    /**
     * Gets the regarding property value. 
     * @returns a incident
     */
    public get regarding() {
        return this._regarding;
    };
    /**
     * Sets the regarding property value. 
     * @param value Value to set for the regarding property.
     */
    public set regarding(value: Incident | undefined) {
        this._regarding = value;
    };
    /**
     * Gets the regarding_account property value. 
     * @returns a account
     */
    public get regarding_account() {
        return this._regarding_account;
    };
    /**
     * Sets the regarding_account property value. 
     * @param value Value to set for the regarding_account property.
     */
    public set regarding_account(value: Account | undefined) {
        this._regarding_account = value;
    };
    /**
     * Gets the regarding_activitypointer property value. 
     * @returns a activitypointer
     */
    public get regarding_activitypointer() {
        return this._regarding_activitypointer;
    };
    /**
     * Sets the regarding_activitypointer property value. 
     * @param value Value to set for the regarding_activitypointer property.
     */
    public set regarding_activitypointer(value: Activitypointer | undefined) {
        this._regarding_activitypointer = value;
    };
    /**
     * Gets the regarding_appointment property value. 
     * @returns a appointment
     */
    public get regarding_appointment() {
        return this._regarding_appointment;
    };
    /**
     * Sets the regarding_appointment property value. 
     * @param value Value to set for the regarding_appointment property.
     */
    public set regarding_appointment(value: Appointment | undefined) {
        this._regarding_appointment = value;
    };
    /**
     * Gets the regarding_contact property value. 
     * @returns a contact
     */
    public get regarding_contact() {
        return this._regarding_contact;
    };
    /**
     * Sets the regarding_contact property value. 
     * @param value Value to set for the regarding_contact property.
     */
    public set regarding_contact(value: Contact | undefined) {
        this._regarding_contact = value;
    };
    /**
     * Gets the regarding_email property value. 
     * @returns a email
     */
    public get regarding_email() {
        return this._regarding_email;
    };
    /**
     * Sets the regarding_email property value. 
     * @param value Value to set for the regarding_email property.
     */
    public set regarding_email(value: Email | undefined) {
        this._regarding_email = value;
    };
    /**
     * Gets the regarding_fax property value. 
     * @returns a fax
     */
    public get regarding_fax() {
        return this._regarding_fax;
    };
    /**
     * Sets the regarding_fax property value. 
     * @param value Value to set for the regarding_fax property.
     */
    public set regarding_fax(value: Fax | undefined) {
        this._regarding_fax = value;
    };
    /**
     * Gets the regarding_invoice property value. 
     * @returns a invoice
     */
    public get regarding_invoice() {
        return this._regarding_invoice;
    };
    /**
     * Sets the regarding_invoice property value. 
     * @param value Value to set for the regarding_invoice property.
     */
    public set regarding_invoice(value: Invoice | undefined) {
        this._regarding_invoice = value;
    };
    /**
     * Gets the regarding_lead property value. 
     * @returns a lead
     */
    public get regarding_lead() {
        return this._regarding_lead;
    };
    /**
     * Sets the regarding_lead property value. 
     * @param value Value to set for the regarding_lead property.
     */
    public set regarding_lead(value: Lead | undefined) {
        this._regarding_lead = value;
    };
    /**
     * Gets the regarding_letter property value. 
     * @returns a letter
     */
    public get regarding_letter() {
        return this._regarding_letter;
    };
    /**
     * Sets the regarding_letter property value. 
     * @param value Value to set for the regarding_letter property.
     */
    public set regarding_letter(value: Letter | undefined) {
        this._regarding_letter = value;
    };
    /**
     * Gets the regarding_opportunity property value. 
     * @returns a opportunity
     */
    public get regarding_opportunity() {
        return this._regarding_opportunity;
    };
    /**
     * Sets the regarding_opportunity property value. 
     * @param value Value to set for the regarding_opportunity property.
     */
    public set regarding_opportunity(value: Opportunity | undefined) {
        this._regarding_opportunity = value;
    };
    /**
     * Gets the regarding_phonecall property value. 
     * @returns a phonecall
     */
    public get regarding_phonecall() {
        return this._regarding_phonecall;
    };
    /**
     * Sets the regarding_phonecall property value. 
     * @param value Value to set for the regarding_phonecall property.
     */
    public set regarding_phonecall(value: Phonecall | undefined) {
        this._regarding_phonecall = value;
    };
    /**
     * Gets the regarding_quote property value. 
     * @returns a quote
     */
    public get regarding_quote() {
        return this._regarding_quote;
    };
    /**
     * Sets the regarding_quote property value. 
     * @param value Value to set for the regarding_quote property.
     */
    public set regarding_quote(value: Quote | undefined) {
        this._regarding_quote = value;
    };
    /**
     * Gets the regarding_salesorder property value. 
     * @returns a salesorder
     */
    public get regarding_salesorder() {
        return this._regarding_salesorder;
    };
    /**
     * Sets the regarding_salesorder property value. 
     * @param value Value to set for the regarding_salesorder property.
     */
    public set regarding_salesorder(value: Salesorder | undefined) {
        this._regarding_salesorder = value;
    };
    /**
     * Gets the regarding_serviceappointment property value. 
     * @returns a serviceappointment
     */
    public get regarding_serviceappointment() {
        return this._regarding_serviceappointment;
    };
    /**
     * Sets the regarding_serviceappointment property value. 
     * @param value Value to set for the regarding_serviceappointment property.
     */
    public set regarding_serviceappointment(value: Serviceappointment | undefined) {
        this._regarding_serviceappointment = value;
    };
    /**
     * Gets the regarding_socialactivity property value. 
     * @returns a socialactivity
     */
    public get regarding_socialactivity() {
        return this._regarding_socialactivity;
    };
    /**
     * Sets the regarding_socialactivity property value. 
     * @param value Value to set for the regarding_socialactivity property.
     */
    public set regarding_socialactivity(value: Socialactivity | undefined) {
        this._regarding_socialactivity = value;
    };
    /**
     * Gets the regarding_task property value. 
     * @returns a task
     */
    public get regarding_task() {
        return this._regarding_task;
    };
    /**
     * Sets the regarding_task property value. 
     * @param value Value to set for the regarding_task property.
     */
    public set regarding_task(value: Task | undefined) {
        this._regarding_task = value;
    };
    /**
     * Gets the regardingentityid property value. 
     * @returns a string
     */
    public get regardingentityid() {
        return this._regardingentityid;
    };
    /**
     * Sets the regardingentityid property value. 
     * @param value Value to set for the regardingentityid property.
     */
    public set regardingentityid(value: string | undefined) {
        this._regardingentityid = value;
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
        writer.writeStringValue("_msdyn_slaitemid_value", this._msdyn_slaitemid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regarding_value", this._regarding_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeDateValue("applicablefromvalue", this.applicablefromvalue);
        writer.writeDateValue("computedfailuretime", this.computedfailuretime);
        writer.writeDateValue("computedwarningtime", this.computedwarningtime);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("elapsedtime", this.elapsedtime);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeDateValue("failuretime", this.failuretime);
        writer.writeDateValue("lastresumetime", this.lastresumetime);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_actionexecutionstatus", this.msdyn_actionexecutionstatus);
        writer.writeStringValue("msdyn_calendarid", this.msdyn_calendarid);
        writer.writeStringValue("msdyn_prevslakpiinstanceid", this.msdyn_prevslakpiinstanceid);
        writer.writeObjectValue<Slaitem>("msdyn_slaitemid", this.msdyn_slaitemid);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi", this.msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid", this.msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeDateValue("pausedon", this.pausedon);
        writer.writeObjectValue<Incident>("regarding", this.regarding);
        writer.writeObjectValue<Account>("regarding_account", this.regarding_account);
        writer.writeObjectValue<Activitypointer>("regarding_activitypointer", this.regarding_activitypointer);
        writer.writeObjectValue<Appointment>("regarding_appointment", this.regarding_appointment);
        writer.writeObjectValue<Contact>("regarding_contact", this.regarding_contact);
        writer.writeObjectValue<Email>("regarding_email", this.regarding_email);
        writer.writeObjectValue<Fax>("regarding_fax", this.regarding_fax);
        writer.writeObjectValue<Invoice>("regarding_invoice", this.regarding_invoice);
        writer.writeObjectValue<Lead>("regarding_lead", this.regarding_lead);
        writer.writeObjectValue<Letter>("regarding_letter", this.regarding_letter);
        writer.writeObjectValue<Opportunity>("regarding_opportunity", this.regarding_opportunity);
        writer.writeObjectValue<Phonecall>("regarding_phonecall", this.regarding_phonecall);
        writer.writeObjectValue<Quote>("regarding_quote", this.regarding_quote);
        writer.writeObjectValue<Salesorder>("regarding_salesorder", this.regarding_salesorder);
        writer.writeObjectValue<Serviceappointment>("regarding_serviceappointment", this.regarding_serviceappointment);
        writer.writeObjectValue<Socialactivity>("regarding_socialactivity", this.regarding_socialactivity);
        writer.writeObjectValue<Task>("regarding_task", this.regarding_task);
        writer.writeStringValue("regardingentityid", this.regardingentityid);
        writer.writeCollectionOfObjectValues<Incident>("slakpiinstance_incident_firstresponsebykpi", this.slakpiinstance_incident_firstresponsebykpi);
        writer.writeCollectionOfObjectValues<Incident>("slakpiinstance_incident_resolvebykpi", this.slakpiinstance_incident_resolvebykpi);
        writer.writeCollectionOfObjectValues<Syncerror>("sLAKPIInstance_SyncErrors", this.sLAKPIInstance_SyncErrors);
        writer.writeStringValue("slakpiinstanceid", this.slakpiinstanceid);
        writer.writeNumberValue("status", this.status);
        writer.writeDateValue("succeededon", this.succeededon);
        writer.writeDateValue("successcheckedat", this.successcheckedat);
        writer.writeBooleanValue("terminalstatereached", this.terminalstatereached);
        writer.writeDateValue("terminalstatetime", this.terminalstatetime);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeDateValue("warningtime", this.warningtime);
        writer.writeNumberValue("warningtimereached", this.warningtimereached);
    };
    /**
     * Gets the slakpiinstance_incident_firstresponsebykpi property value. 
     * @returns a incident
     */
    public get slakpiinstance_incident_firstresponsebykpi() {
        return this._slakpiinstance_incident_firstresponsebykpi;
    };
    /**
     * Sets the slakpiinstance_incident_firstresponsebykpi property value. 
     * @param value Value to set for the slakpiinstance_incident_firstresponsebykpi property.
     */
    public set slakpiinstance_incident_firstresponsebykpi(value: Incident[] | undefined) {
        this._slakpiinstance_incident_firstresponsebykpi = value;
    };
    /**
     * Gets the slakpiinstance_incident_resolvebykpi property value. 
     * @returns a incident
     */
    public get slakpiinstance_incident_resolvebykpi() {
        return this._slakpiinstance_incident_resolvebykpi;
    };
    /**
     * Sets the slakpiinstance_incident_resolvebykpi property value. 
     * @param value Value to set for the slakpiinstance_incident_resolvebykpi property.
     */
    public set slakpiinstance_incident_resolvebykpi(value: Incident[] | undefined) {
        this._slakpiinstance_incident_resolvebykpi = value;
    };
    /**
     * Gets the sLAKPIInstance_SyncErrors property value. 
     * @returns a syncerror
     */
    public get sLAKPIInstance_SyncErrors() {
        return this._sLAKPIInstance_SyncErrors;
    };
    /**
     * Sets the sLAKPIInstance_SyncErrors property value. 
     * @param value Value to set for the SLAKPIInstance_SyncErrors property.
     */
    public set sLAKPIInstance_SyncErrors(value: Syncerror[] | undefined) {
        this._sLAKPIInstance_SyncErrors = value;
    };
    /**
     * Gets the slakpiinstanceid property value. 
     * @returns a string
     */
    public get slakpiinstanceid() {
        return this._slakpiinstanceid;
    };
    /**
     * Sets the slakpiinstanceid property value. 
     * @param value Value to set for the slakpiinstanceid property.
     */
    public set slakpiinstanceid(value: string | undefined) {
        this._slakpiinstanceid = value;
    };
    /**
     * Gets the status property value. 
     * @returns a integer
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: number | undefined) {
        this._status = value;
    };
    /**
     * Gets the succeededon property value. 
     * @returns a Date
     */
    public get succeededon() {
        return this._succeededon;
    };
    /**
     * Sets the succeededon property value. 
     * @param value Value to set for the succeededon property.
     */
    public set succeededon(value: Date | undefined) {
        this._succeededon = value;
    };
    /**
     * Gets the successcheckedat property value. 
     * @returns a Date
     */
    public get successcheckedat() {
        return this._successcheckedat;
    };
    /**
     * Sets the successcheckedat property value. 
     * @param value Value to set for the successcheckedat property.
     */
    public set successcheckedat(value: Date | undefined) {
        this._successcheckedat = value;
    };
    /**
     * Gets the terminalstatereached property value. 
     * @returns a boolean
     */
    public get terminalstatereached() {
        return this._terminalstatereached;
    };
    /**
     * Sets the terminalstatereached property value. 
     * @param value Value to set for the terminalstatereached property.
     */
    public set terminalstatereached(value: boolean | undefined) {
        this._terminalstatereached = value;
    };
    /**
     * Gets the terminalstatetime property value. 
     * @returns a Date
     */
    public get terminalstatetime() {
        return this._terminalstatetime;
    };
    /**
     * Sets the terminalstatetime property value. 
     * @param value Value to set for the terminalstatetime property.
     */
    public set terminalstatetime(value: Date | undefined) {
        this._terminalstatetime = value;
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
     * Gets the warningtime property value. 
     * @returns a Date
     */
    public get warningtime() {
        return this._warningtime;
    };
    /**
     * Sets the warningtime property value. 
     * @param value Value to set for the warningtime property.
     */
    public set warningtime(value: Date | undefined) {
        this._warningtime = value;
    };
    /**
     * Gets the warningtimereached property value. 
     * @returns a integer
     */
    public get warningtimereached() {
        return this._warningtimereached;
    };
    /**
     * Sets the warningtimereached property value. 
     * @param value Value to set for the warningtimereached property.
     */
    public set warningtimereached(value: number | undefined) {
        this._warningtimereached = value;
    };
}
