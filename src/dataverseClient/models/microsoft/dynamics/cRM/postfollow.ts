import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCompetitorFromDiscriminatorValue} from './createCompetitorFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Appointment, Asyncoperation, Businessunit, Competitor, Contact, Crmbaseentity, Incident, Knowledgearticle, Lead, Opportunity, Phonecall, Principal, Processsession, Queue, Recurringappointmentmaster, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Postfollow extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _postFollow_AsyncOperations?: Asyncoperation[] | undefined;
    private _postFollow_SyncErrors?: Syncerror[] | undefined;
    private _postfollowid?: string | undefined;
    private _regardingobjectid_account?: Account | undefined;
    private _regardingobjectid_appointment?: Appointment | undefined;
    private _regardingobjectid_competitor?: Competitor | undefined;
    private _regardingobjectid_contact?: Contact | undefined;
    private _regardingobjectid_incident?: Incident | undefined;
    private _regardingobjectid_knowledgearticle?: Knowledgearticle | undefined;
    private _regardingobjectid_lead?: Lead | undefined;
    private _regardingobjectid_opportunity?: Opportunity | undefined;
    private _regardingobjectid_phonecall?: Phonecall | undefined;
    private _regardingobjectid_processsession?: Processsession | undefined;
    private _regardingobjectid_queue?: Queue | undefined;
    private _regardingobjectid_recurringappointmentmaster?: Recurringappointmentmaster | undefined;
    private _regardingobjectid_systemuser?: Systemuser | undefined;
    private _regardingobjectid_task?: Task | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _yammerpoststate?: number | undefined;
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
     * Instantiates a new postfollow and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Postfollow)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Postfollow)._createdonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Postfollow)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Postfollow)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Postfollow)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Postfollow)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Postfollow)._regardingobjectid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Postfollow).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Postfollow).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Postfollow).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "ownerid": (o, n) => { (o as unknown as Postfollow).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Postfollow).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Postfollow).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Postfollow).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "postFollow_AsyncOperations": (o, n) => { (o as unknown as Postfollow).postFollow_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "postFollow_SyncErrors": (o, n) => { (o as unknown as Postfollow).postFollow_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "postfollowid": (o, n) => { (o as unknown as Postfollow).postfollowid = n.getStringValue(); },
            "regardingobjectid_account": (o, n) => { (o as unknown as Postfollow).regardingobjectid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_appointment": (o, n) => { (o as unknown as Postfollow).regardingobjectid_appointment = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "regardingobjectid_competitor": (o, n) => { (o as unknown as Postfollow).regardingobjectid_competitor = n.getObjectValue<Competitor>(createCompetitorFromDiscriminatorValue); },
            "regardingobjectid_contact": (o, n) => { (o as unknown as Postfollow).regardingobjectid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_incident": (o, n) => { (o as unknown as Postfollow).regardingobjectid_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle": (o, n) => { (o as unknown as Postfollow).regardingobjectid_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_lead": (o, n) => { (o as unknown as Postfollow).regardingobjectid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_opportunity": (o, n) => { (o as unknown as Postfollow).regardingobjectid_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_phonecall": (o, n) => { (o as unknown as Postfollow).regardingobjectid_phonecall = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "regardingobjectid_processsession": (o, n) => { (o as unknown as Postfollow).regardingobjectid_processsession = n.getObjectValue<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "regardingobjectid_queue": (o, n) => { (o as unknown as Postfollow).regardingobjectid_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "regardingobjectid_recurringappointmentmaster": (o, n) => { (o as unknown as Postfollow).regardingobjectid_recurringappointmentmaster = n.getObjectValue<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "regardingobjectid_systemuser": (o, n) => { (o as unknown as Postfollow).regardingobjectid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_task": (o, n) => { (o as unknown as Postfollow).regardingobjectid_task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Postfollow).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Postfollow).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Postfollow).versionnumber = n.getNumberValue(); },
            "yammerpoststate": (o, n) => { (o as unknown as Postfollow).yammerpoststate = n.getNumberValue(); },
        };
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
     * Gets the postFollow_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get postFollow_AsyncOperations() {
        return this._postFollow_AsyncOperations;
    };
    /**
     * Sets the postFollow_AsyncOperations property value. 
     * @param value Value to set for the PostFollow_AsyncOperations property.
     */
    public set postFollow_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._postFollow_AsyncOperations = value;
    };
    /**
     * Gets the postFollow_SyncErrors property value. 
     * @returns a syncerror
     */
    public get postFollow_SyncErrors() {
        return this._postFollow_SyncErrors;
    };
    /**
     * Sets the postFollow_SyncErrors property value. 
     * @param value Value to set for the PostFollow_SyncErrors property.
     */
    public set postFollow_SyncErrors(value: Syncerror[] | undefined) {
        this._postFollow_SyncErrors = value;
    };
    /**
     * Gets the postfollowid property value. 
     * @returns a string
     */
    public get postfollowid() {
        return this._postfollowid;
    };
    /**
     * Sets the postfollowid property value. 
     * @param value Value to set for the postfollowid property.
     */
    public set postfollowid(value: string | undefined) {
        this._postfollowid = value;
    };
    /**
     * Gets the regardingobjectid_account property value. 
     * @returns a account
     */
    public get regardingobjectid_account() {
        return this._regardingobjectid_account;
    };
    /**
     * Sets the regardingobjectid_account property value. 
     * @param value Value to set for the regardingobjectid_account property.
     */
    public set regardingobjectid_account(value: Account | undefined) {
        this._regardingobjectid_account = value;
    };
    /**
     * Gets the regardingobjectid_appointment property value. 
     * @returns a appointment
     */
    public get regardingobjectid_appointment() {
        return this._regardingobjectid_appointment;
    };
    /**
     * Sets the regardingobjectid_appointment property value. 
     * @param value Value to set for the regardingobjectid_appointment property.
     */
    public set regardingobjectid_appointment(value: Appointment | undefined) {
        this._regardingobjectid_appointment = value;
    };
    /**
     * Gets the regardingobjectid_competitor property value. 
     * @returns a competitor
     */
    public get regardingobjectid_competitor() {
        return this._regardingobjectid_competitor;
    };
    /**
     * Sets the regardingobjectid_competitor property value. 
     * @param value Value to set for the regardingobjectid_competitor property.
     */
    public set regardingobjectid_competitor(value: Competitor | undefined) {
        this._regardingobjectid_competitor = value;
    };
    /**
     * Gets the regardingobjectid_contact property value. 
     * @returns a contact
     */
    public get regardingobjectid_contact() {
        return this._regardingobjectid_contact;
    };
    /**
     * Sets the regardingobjectid_contact property value. 
     * @param value Value to set for the regardingobjectid_contact property.
     */
    public set regardingobjectid_contact(value: Contact | undefined) {
        this._regardingobjectid_contact = value;
    };
    /**
     * Gets the regardingobjectid_incident property value. 
     * @returns a incident
     */
    public get regardingobjectid_incident() {
        return this._regardingobjectid_incident;
    };
    /**
     * Sets the regardingobjectid_incident property value. 
     * @param value Value to set for the regardingobjectid_incident property.
     */
    public set regardingobjectid_incident(value: Incident | undefined) {
        this._regardingobjectid_incident = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle() {
        return this._regardingobjectid_knowledgearticle;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle property.
     */
    public set regardingobjectid_knowledgearticle(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle = value;
    };
    /**
     * Gets the regardingobjectid_lead property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead() {
        return this._regardingobjectid_lead;
    };
    /**
     * Sets the regardingobjectid_lead property value. 
     * @param value Value to set for the regardingobjectid_lead property.
     */
    public set regardingobjectid_lead(value: Lead | undefined) {
        this._regardingobjectid_lead = value;
    };
    /**
     * Gets the regardingobjectid_opportunity property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity() {
        return this._regardingobjectid_opportunity;
    };
    /**
     * Sets the regardingobjectid_opportunity property value. 
     * @param value Value to set for the regardingobjectid_opportunity property.
     */
    public set regardingobjectid_opportunity(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity = value;
    };
    /**
     * Gets the regardingobjectid_phonecall property value. 
     * @returns a phonecall
     */
    public get regardingobjectid_phonecall() {
        return this._regardingobjectid_phonecall;
    };
    /**
     * Sets the regardingobjectid_phonecall property value. 
     * @param value Value to set for the regardingobjectid_phonecall property.
     */
    public set regardingobjectid_phonecall(value: Phonecall | undefined) {
        this._regardingobjectid_phonecall = value;
    };
    /**
     * Gets the regardingobjectid_processsession property value. 
     * @returns a processsession
     */
    public get regardingobjectid_processsession() {
        return this._regardingobjectid_processsession;
    };
    /**
     * Sets the regardingobjectid_processsession property value. 
     * @param value Value to set for the regardingobjectid_processsession property.
     */
    public set regardingobjectid_processsession(value: Processsession | undefined) {
        this._regardingobjectid_processsession = value;
    };
    /**
     * Gets the regardingobjectid_queue property value. 
     * @returns a queue
     */
    public get regardingobjectid_queue() {
        return this._regardingobjectid_queue;
    };
    /**
     * Sets the regardingobjectid_queue property value. 
     * @param value Value to set for the regardingobjectid_queue property.
     */
    public set regardingobjectid_queue(value: Queue | undefined) {
        this._regardingobjectid_queue = value;
    };
    /**
     * Gets the regardingobjectid_recurringappointmentmaster property value. 
     * @returns a recurringappointmentmaster
     */
    public get regardingobjectid_recurringappointmentmaster() {
        return this._regardingobjectid_recurringappointmentmaster;
    };
    /**
     * Sets the regardingobjectid_recurringappointmentmaster property value. 
     * @param value Value to set for the regardingobjectid_recurringappointmentmaster property.
     */
    public set regardingobjectid_recurringappointmentmaster(value: Recurringappointmentmaster | undefined) {
        this._regardingobjectid_recurringappointmentmaster = value;
    };
    /**
     * Gets the regardingobjectid_systemuser property value. 
     * @returns a systemuser
     */
    public get regardingobjectid_systemuser() {
        return this._regardingobjectid_systemuser;
    };
    /**
     * Sets the regardingobjectid_systemuser property value. 
     * @param value Value to set for the regardingobjectid_systemuser property.
     */
    public set regardingobjectid_systemuser(value: Systemuser | undefined) {
        this._regardingobjectid_systemuser = value;
    };
    /**
     * Gets the regardingobjectid_task property value. 
     * @returns a task
     */
    public get regardingobjectid_task() {
        return this._regardingobjectid_task;
    };
    /**
     * Sets the regardingobjectid_task property value. 
     * @param value Value to set for the regardingobjectid_task property.
     */
    public set regardingobjectid_task(value: Task | undefined) {
        this._regardingobjectid_task = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeCollectionOfObjectValues<Asyncoperation>("postFollow_AsyncOperations", this.postFollow_AsyncOperations);
        writer.writeCollectionOfObjectValues<Syncerror>("postFollow_SyncErrors", this.postFollow_SyncErrors);
        writer.writeStringValue("postfollowid", this.postfollowid);
        writer.writeObjectValue<Account>("regardingobjectid_account", this.regardingobjectid_account);
        writer.writeObjectValue<Appointment>("regardingobjectid_appointment", this.regardingobjectid_appointment);
        writer.writeObjectValue<Competitor>("regardingobjectid_competitor", this.regardingobjectid_competitor);
        writer.writeObjectValue<Contact>("regardingobjectid_contact", this.regardingobjectid_contact);
        writer.writeObjectValue<Incident>("regardingobjectid_incident", this.regardingobjectid_incident);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle", this.regardingobjectid_knowledgearticle);
        writer.writeObjectValue<Lead>("regardingobjectid_lead", this.regardingobjectid_lead);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity", this.regardingobjectid_opportunity);
        writer.writeObjectValue<Phonecall>("regardingobjectid_phonecall", this.regardingobjectid_phonecall);
        writer.writeObjectValue<Processsession>("regardingobjectid_processsession", this.regardingobjectid_processsession);
        writer.writeObjectValue<Queue>("regardingobjectid_queue", this.regardingobjectid_queue);
        writer.writeObjectValue<Recurringappointmentmaster>("regardingobjectid_recurringappointmentmaster", this.regardingobjectid_recurringappointmentmaster);
        writer.writeObjectValue<Systemuser>("regardingobjectid_systemuser", this.regardingobjectid_systemuser);
        writer.writeObjectValue<Task>("regardingobjectid_task", this.regardingobjectid_task);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeNumberValue("yammerpoststate", this.yammerpoststate);
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
    /**
     * Gets the yammerpoststate property value. 
     * @returns a integer
     */
    public get yammerpoststate() {
        return this._yammerpoststate;
    };
    /**
     * Sets the yammerpoststate property value. 
     * @param value Value to set for the yammerpoststate property.
     */
    public set yammerpoststate(value: number | undefined) {
        this._yammerpoststate = value;
    };
}
