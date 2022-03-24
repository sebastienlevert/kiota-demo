import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCompetitorFromDiscriminatorValue} from './createCompetitorFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Appointment, Businessunit, Competitor, Contact, Crmbaseentity, Incident, Knowledgearticle, Lead, Opportunity, Phonecall, Post, Processsession, Queue, Recurringappointmentmaster, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Postregarding extends Crmbaseentity implements Parsable {
    private __regardingobjectid_value?: string | undefined;
    private __regardingobjectownerid_value?: string | undefined;
    private __regardingobjectowningbusinessunit_value?: string | undefined;
    private _latestautopostmodifiedon?: Date | undefined;
    private _latestmanualpostmodifiedon?: Date | undefined;
    private _post_PostRegardings?: Post[] | undefined;
    private _postregardingid?: string | undefined;
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
    private _regardingobjectid_team?: Team | undefined;
    private _regardingobjectowningbusinessunit?: Businessunit | undefined;
    private _regardingobjecttypecodeforsharing?: string | undefined;
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
     * Gets the _regardingobjectownerid_value property value. 
     * @returns a string
     */
    public get _regardingobjectownerid_value() {
        return this.__regardingobjectownerid_value;
    };
    /**
     * Sets the _regardingobjectownerid_value property value. 
     * @param value Value to set for the _regardingobjectownerid_value property.
     */
    public set _regardingobjectownerid_value(value: string | undefined) {
        this.__regardingobjectownerid_value = value;
    };
    /**
     * Gets the _regardingobjectowningbusinessunit_value property value. 
     * @returns a string
     */
    public get _regardingobjectowningbusinessunit_value() {
        return this.__regardingobjectowningbusinessunit_value;
    };
    /**
     * Sets the _regardingobjectowningbusinessunit_value property value. 
     * @param value Value to set for the _regardingobjectowningbusinessunit_value property.
     */
    public set _regardingobjectowningbusinessunit_value(value: string | undefined) {
        this.__regardingobjectowningbusinessunit_value = value;
    };
    /**
     * Instantiates a new postregarding and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_regardingobjectid_value": (o, n) => { (o as unknown as Postregarding)._regardingobjectid_value = n.getStringValue(); },
            "_regardingobjectownerid_value": (o, n) => { (o as unknown as Postregarding)._regardingobjectownerid_value = n.getStringValue(); },
            "_regardingobjectowningbusinessunit_value": (o, n) => { (o as unknown as Postregarding)._regardingobjectowningbusinessunit_value = n.getStringValue(); },
            "latestautopostmodifiedon": (o, n) => { (o as unknown as Postregarding).latestautopostmodifiedon = n.getDateValue(); },
            "latestmanualpostmodifiedon": (o, n) => { (o as unknown as Postregarding).latestmanualpostmodifiedon = n.getDateValue(); },
            "post_PostRegardings": (o, n) => { (o as unknown as Postregarding).post_PostRegardings = n.getCollectionOfObjectValues<Post>(createPostFromDiscriminatorValue); },
            "postregardingid": (o, n) => { (o as unknown as Postregarding).postregardingid = n.getStringValue(); },
            "regardingobjectid_account": (o, n) => { (o as unknown as Postregarding).regardingobjectid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_appointment": (o, n) => { (o as unknown as Postregarding).regardingobjectid_appointment = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "regardingobjectid_competitor": (o, n) => { (o as unknown as Postregarding).regardingobjectid_competitor = n.getObjectValue<Competitor>(createCompetitorFromDiscriminatorValue); },
            "regardingobjectid_contact": (o, n) => { (o as unknown as Postregarding).regardingobjectid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_incident": (o, n) => { (o as unknown as Postregarding).regardingobjectid_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle": (o, n) => { (o as unknown as Postregarding).regardingobjectid_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_lead": (o, n) => { (o as unknown as Postregarding).regardingobjectid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_opportunity": (o, n) => { (o as unknown as Postregarding).regardingobjectid_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_phonecall": (o, n) => { (o as unknown as Postregarding).regardingobjectid_phonecall = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "regardingobjectid_processsession": (o, n) => { (o as unknown as Postregarding).regardingobjectid_processsession = n.getObjectValue<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "regardingobjectid_queue": (o, n) => { (o as unknown as Postregarding).regardingobjectid_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "regardingobjectid_recurringappointmentmaster": (o, n) => { (o as unknown as Postregarding).regardingobjectid_recurringappointmentmaster = n.getObjectValue<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "regardingobjectid_systemuser": (o, n) => { (o as unknown as Postregarding).regardingobjectid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_task": (o, n) => { (o as unknown as Postregarding).regardingobjectid_task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
            "regardingobjectid_team": (o, n) => { (o as unknown as Postregarding).regardingobjectid_team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "regardingobjectowningbusinessunit": (o, n) => { (o as unknown as Postregarding).regardingobjectowningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "regardingobjecttypecodeforsharing": (o, n) => { (o as unknown as Postregarding).regardingobjecttypecodeforsharing = n.getStringValue(); },
        };
    };
    /**
     * Gets the latestautopostmodifiedon property value. 
     * @returns a Date
     */
    public get latestautopostmodifiedon() {
        return this._latestautopostmodifiedon;
    };
    /**
     * Sets the latestautopostmodifiedon property value. 
     * @param value Value to set for the latestautopostmodifiedon property.
     */
    public set latestautopostmodifiedon(value: Date | undefined) {
        this._latestautopostmodifiedon = value;
    };
    /**
     * Gets the latestmanualpostmodifiedon property value. 
     * @returns a Date
     */
    public get latestmanualpostmodifiedon() {
        return this._latestmanualpostmodifiedon;
    };
    /**
     * Sets the latestmanualpostmodifiedon property value. 
     * @param value Value to set for the latestmanualpostmodifiedon property.
     */
    public set latestmanualpostmodifiedon(value: Date | undefined) {
        this._latestmanualpostmodifiedon = value;
    };
    /**
     * Gets the post_PostRegardings property value. 
     * @returns a post
     */
    public get post_PostRegardings() {
        return this._post_PostRegardings;
    };
    /**
     * Sets the post_PostRegardings property value. 
     * @param value Value to set for the post_PostRegardings property.
     */
    public set post_PostRegardings(value: Post[] | undefined) {
        this._post_PostRegardings = value;
    };
    /**
     * Gets the postregardingid property value. 
     * @returns a string
     */
    public get postregardingid() {
        return this._postregardingid;
    };
    /**
     * Sets the postregardingid property value. 
     * @param value Value to set for the postregardingid property.
     */
    public set postregardingid(value: string | undefined) {
        this._postregardingid = value;
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
     * Gets the regardingobjectid_team property value. 
     * @returns a team
     */
    public get regardingobjectid_team() {
        return this._regardingobjectid_team;
    };
    /**
     * Sets the regardingobjectid_team property value. 
     * @param value Value to set for the regardingobjectid_team property.
     */
    public set regardingobjectid_team(value: Team | undefined) {
        this._regardingobjectid_team = value;
    };
    /**
     * Gets the regardingobjectowningbusinessunit property value. 
     * @returns a businessunit
     */
    public get regardingobjectowningbusinessunit() {
        return this._regardingobjectowningbusinessunit;
    };
    /**
     * Sets the regardingobjectowningbusinessunit property value. 
     * @param value Value to set for the regardingobjectowningbusinessunit property.
     */
    public set regardingobjectowningbusinessunit(value: Businessunit | undefined) {
        this._regardingobjectowningbusinessunit = value;
    };
    /**
     * Gets the regardingobjecttypecodeforsharing property value. 
     * @returns a string
     */
    public get regardingobjecttypecodeforsharing() {
        return this._regardingobjecttypecodeforsharing;
    };
    /**
     * Sets the regardingobjecttypecodeforsharing property value. 
     * @param value Value to set for the regardingobjecttypecodeforsharing property.
     */
    public set regardingobjecttypecodeforsharing(value: string | undefined) {
        this._regardingobjecttypecodeforsharing = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_regardingobjectownerid_value", this._regardingobjectownerid_value);
        writer.writeStringValue("_regardingobjectowningbusinessunit_value", this._regardingobjectowningbusinessunit_value);
        writer.writeDateValue("latestautopostmodifiedon", this.latestautopostmodifiedon);
        writer.writeDateValue("latestmanualpostmodifiedon", this.latestmanualpostmodifiedon);
        writer.writeCollectionOfObjectValues<Post>("post_PostRegardings", this.post_PostRegardings);
        writer.writeStringValue("postregardingid", this.postregardingid);
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
        writer.writeObjectValue<Team>("regardingobjectid_team", this.regardingobjectid_team);
        writer.writeObjectValue<Businessunit>("regardingobjectowningbusinessunit", this.regardingobjectowningbusinessunit);
        writer.writeStringValue("regardingobjecttypecodeforsharing", this.regardingobjecttypecodeforsharing);
    };
}
