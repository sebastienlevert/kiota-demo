import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Activitypointer, Asyncoperation, Bulkoperation, Businessunit, Campaignresponse, Crmbaseentity, Incidentresolution, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Principal, Quoteclose, Serviceappointment, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Interactionforemail extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _emailactivityid?: string | undefined;
    private _emailaddress?: string | undefined;
    private _emailinteractionreplyid?: string | undefined;
    private _emailinteractiontime?: Date | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _interactedcomponenttext?: string | undefined;
    private _interactionforemail_BulkOperations?: Bulkoperation[] | undefined;
    private _interactionforemail_CampaignResponses?: Campaignresponse[] | undefined;
    private _interactionforemail_IncidentResolutions?: Incidentresolution[] | undefined;
    private _interactionforemail_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _interactionforemail_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _interactionforemail_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _interactionforemail_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _interactionforemail_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _interactionforemail_msfp_alerts?: Msfp_alert[] | undefined;
    private _interactionforemail_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _interactionforemail_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _interactionforemail_OpportunityCloses?: Opportunityclose[] | undefined;
    private _interactionforemail_OrderCloses?: Orderclose[] | undefined;
    private _interactionforemail_QuoteCloses?: Quoteclose[] | undefined;
    private _interactionforemail_ServiceAppointments?: Serviceappointment[] | undefined;
    private _interactionforemailid?: string | undefined;
    private _interactionlocation?: string | undefined;
    private _interactionpartyid?: string | undefined;
    private _interactionrepliedby?: string | undefined;
    private _interactionreplyid?: string | undefined;
    private _interactiontype?: number | undefined;
    private _interactionuseragent?: string | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _name?: string | undefined;
    private _new_interactionforemail_ActivityPointers?: Activitypointer[] | undefined;
    private _new_interactionforemail_AsyncOperations?: Asyncoperation[] | undefined;
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
     * Instantiates a new interactionforemail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
    };
    /**
     * Gets the emailactivityid property value. 
     * @returns a string
     */
    public get emailactivityid() {
        return this._emailactivityid;
    };
    /**
     * Sets the emailactivityid property value. 
     * @param value Value to set for the emailactivityid property.
     */
    public set emailactivityid(value: string | undefined) {
        this._emailactivityid = value;
    };
    /**
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
    };
    /**
     * Gets the emailinteractionreplyid property value. 
     * @returns a string
     */
    public get emailinteractionreplyid() {
        return this._emailinteractionreplyid;
    };
    /**
     * Sets the emailinteractionreplyid property value. 
     * @param value Value to set for the emailinteractionreplyid property.
     */
    public set emailinteractionreplyid(value: string | undefined) {
        this._emailinteractionreplyid = value;
    };
    /**
     * Gets the emailinteractiontime property value. 
     * @returns a Date
     */
    public get emailinteractiontime() {
        return this._emailinteractiontime;
    };
    /**
     * Sets the emailinteractiontime property value. 
     * @param value Value to set for the emailinteractiontime property.
     */
    public set emailinteractiontime(value: Date | undefined) {
        this._emailinteractiontime = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Interactionforemail)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Interactionforemail)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Interactionforemail)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Interactionforemail)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Interactionforemail)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Interactionforemail)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Interactionforemail)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Interactionforemail)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Interactionforemail)._transactioncurrencyid_value = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Interactionforemail).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Interactionforemail).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Interactionforemail).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "emailactivityid": (o, n) => { (o as unknown as Interactionforemail).emailactivityid = n.getStringValue(); },
            "emailaddress": (o, n) => { (o as unknown as Interactionforemail).emailaddress = n.getStringValue(); },
            "emailinteractionreplyid": (o, n) => { (o as unknown as Interactionforemail).emailinteractionreplyid = n.getStringValue(); },
            "emailinteractiontime": (o, n) => { (o as unknown as Interactionforemail).emailinteractiontime = n.getDateValue(); },
            "exchangerate": (o, n) => { (o as unknown as Interactionforemail).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Interactionforemail).importsequencenumber = n.getNumberValue(); },
            "interactedcomponenttext": (o, n) => { (o as unknown as Interactionforemail).interactedcomponenttext = n.getStringValue(); },
            "interactionforemail_BulkOperations": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_BulkOperations = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "interactionforemail_CampaignResponses": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_CampaignResponses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "interactionforemail_IncidentResolutions": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "interactionforemail_msdyn_approvals": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "interactionforemail_msdyn_bookingalerts": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "interactionforemail_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "interactionforemail_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "interactionforemail_msdyn_ocsessions": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "interactionforemail_msfp_alerts": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "interactionforemail_msfp_surveyinvites": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "interactionforemail_msfp_surveyresponses": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "interactionforemail_OpportunityCloses": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "interactionforemail_OrderCloses": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "interactionforemail_QuoteCloses": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "interactionforemail_ServiceAppointments": (o, n) => { (o as unknown as Interactionforemail).interactionforemail_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "interactionforemailid": (o, n) => { (o as unknown as Interactionforemail).interactionforemailid = n.getStringValue(); },
            "interactionlocation": (o, n) => { (o as unknown as Interactionforemail).interactionlocation = n.getStringValue(); },
            "interactionpartyid": (o, n) => { (o as unknown as Interactionforemail).interactionpartyid = n.getStringValue(); },
            "interactionrepliedby": (o, n) => { (o as unknown as Interactionforemail).interactionrepliedby = n.getStringValue(); },
            "interactionreplyid": (o, n) => { (o as unknown as Interactionforemail).interactionreplyid = n.getStringValue(); },
            "interactiontype": (o, n) => { (o as unknown as Interactionforemail).interactiontype = n.getNumberValue(); },
            "interactionuseragent": (o, n) => { (o as unknown as Interactionforemail).interactionuseragent = n.getStringValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Interactionforemail).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Interactionforemail).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Interactionforemail).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Interactionforemail).name = n.getStringValue(); },
            "new_interactionforemail_ActivityPointers": (o, n) => { (o as unknown as Interactionforemail).new_interactionforemail_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "new_interactionforemail_AsyncOperations": (o, n) => { (o as unknown as Interactionforemail).new_interactionforemail_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Interactionforemail).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Interactionforemail).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Interactionforemail).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Interactionforemail).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Interactionforemail).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Interactionforemail).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Interactionforemail).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Interactionforemail).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Interactionforemail).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Interactionforemail).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Interactionforemail).versionnumber = n.getNumberValue(); },
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
     * Gets the interactedcomponenttext property value. 
     * @returns a string
     */
    public get interactedcomponenttext() {
        return this._interactedcomponenttext;
    };
    /**
     * Sets the interactedcomponenttext property value. 
     * @param value Value to set for the interactedcomponenttext property.
     */
    public set interactedcomponenttext(value: string | undefined) {
        this._interactedcomponenttext = value;
    };
    /**
     * Gets the interactionforemail_BulkOperations property value. 
     * @returns a bulkoperation
     */
    public get interactionforemail_BulkOperations() {
        return this._interactionforemail_BulkOperations;
    };
    /**
     * Sets the interactionforemail_BulkOperations property value. 
     * @param value Value to set for the interactionforemail_BulkOperations property.
     */
    public set interactionforemail_BulkOperations(value: Bulkoperation[] | undefined) {
        this._interactionforemail_BulkOperations = value;
    };
    /**
     * Gets the interactionforemail_CampaignResponses property value. 
     * @returns a campaignresponse
     */
    public get interactionforemail_CampaignResponses() {
        return this._interactionforemail_CampaignResponses;
    };
    /**
     * Sets the interactionforemail_CampaignResponses property value. 
     * @param value Value to set for the interactionforemail_CampaignResponses property.
     */
    public set interactionforemail_CampaignResponses(value: Campaignresponse[] | undefined) {
        this._interactionforemail_CampaignResponses = value;
    };
    /**
     * Gets the interactionforemail_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get interactionforemail_IncidentResolutions() {
        return this._interactionforemail_IncidentResolutions;
    };
    /**
     * Sets the interactionforemail_IncidentResolutions property value. 
     * @param value Value to set for the interactionforemail_IncidentResolutions property.
     */
    public set interactionforemail_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._interactionforemail_IncidentResolutions = value;
    };
    /**
     * Gets the interactionforemail_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get interactionforemail_msdyn_approvals() {
        return this._interactionforemail_msdyn_approvals;
    };
    /**
     * Sets the interactionforemail_msdyn_approvals property value. 
     * @param value Value to set for the interactionforemail_msdyn_approvals property.
     */
    public set interactionforemail_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._interactionforemail_msdyn_approvals = value;
    };
    /**
     * Gets the interactionforemail_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get interactionforemail_msdyn_bookingalerts() {
        return this._interactionforemail_msdyn_bookingalerts;
    };
    /**
     * Sets the interactionforemail_msdyn_bookingalerts property value. 
     * @param value Value to set for the interactionforemail_msdyn_bookingalerts property.
     */
    public set interactionforemail_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._interactionforemail_msdyn_bookingalerts = value;
    };
    /**
     * Gets the interactionforemail_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get interactionforemail_msdyn_ocliveworkitems() {
        return this._interactionforemail_msdyn_ocliveworkitems;
    };
    /**
     * Sets the interactionforemail_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the interactionforemail_msdyn_ocliveworkitems property.
     */
    public set interactionforemail_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._interactionforemail_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the interactionforemail_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get interactionforemail_msdyn_ocoutboundmessages() {
        return this._interactionforemail_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the interactionforemail_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the interactionforemail_msdyn_ocoutboundmessages property.
     */
    public set interactionforemail_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._interactionforemail_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the interactionforemail_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get interactionforemail_msdyn_ocsessions() {
        return this._interactionforemail_msdyn_ocsessions;
    };
    /**
     * Sets the interactionforemail_msdyn_ocsessions property value. 
     * @param value Value to set for the interactionforemail_msdyn_ocsessions property.
     */
    public set interactionforemail_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._interactionforemail_msdyn_ocsessions = value;
    };
    /**
     * Gets the interactionforemail_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get interactionforemail_msfp_alerts() {
        return this._interactionforemail_msfp_alerts;
    };
    /**
     * Sets the interactionforemail_msfp_alerts property value. 
     * @param value Value to set for the interactionforemail_msfp_alerts property.
     */
    public set interactionforemail_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._interactionforemail_msfp_alerts = value;
    };
    /**
     * Gets the interactionforemail_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get interactionforemail_msfp_surveyinvites() {
        return this._interactionforemail_msfp_surveyinvites;
    };
    /**
     * Sets the interactionforemail_msfp_surveyinvites property value. 
     * @param value Value to set for the interactionforemail_msfp_surveyinvites property.
     */
    public set interactionforemail_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._interactionforemail_msfp_surveyinvites = value;
    };
    /**
     * Gets the interactionforemail_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get interactionforemail_msfp_surveyresponses() {
        return this._interactionforemail_msfp_surveyresponses;
    };
    /**
     * Sets the interactionforemail_msfp_surveyresponses property value. 
     * @param value Value to set for the interactionforemail_msfp_surveyresponses property.
     */
    public set interactionforemail_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._interactionforemail_msfp_surveyresponses = value;
    };
    /**
     * Gets the interactionforemail_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get interactionforemail_OpportunityCloses() {
        return this._interactionforemail_OpportunityCloses;
    };
    /**
     * Sets the interactionforemail_OpportunityCloses property value. 
     * @param value Value to set for the interactionforemail_OpportunityCloses property.
     */
    public set interactionforemail_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._interactionforemail_OpportunityCloses = value;
    };
    /**
     * Gets the interactionforemail_OrderCloses property value. 
     * @returns a orderclose
     */
    public get interactionforemail_OrderCloses() {
        return this._interactionforemail_OrderCloses;
    };
    /**
     * Sets the interactionforemail_OrderCloses property value. 
     * @param value Value to set for the interactionforemail_OrderCloses property.
     */
    public set interactionforemail_OrderCloses(value: Orderclose[] | undefined) {
        this._interactionforemail_OrderCloses = value;
    };
    /**
     * Gets the interactionforemail_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get interactionforemail_QuoteCloses() {
        return this._interactionforemail_QuoteCloses;
    };
    /**
     * Sets the interactionforemail_QuoteCloses property value. 
     * @param value Value to set for the interactionforemail_QuoteCloses property.
     */
    public set interactionforemail_QuoteCloses(value: Quoteclose[] | undefined) {
        this._interactionforemail_QuoteCloses = value;
    };
    /**
     * Gets the interactionforemail_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get interactionforemail_ServiceAppointments() {
        return this._interactionforemail_ServiceAppointments;
    };
    /**
     * Sets the interactionforemail_ServiceAppointments property value. 
     * @param value Value to set for the interactionforemail_ServiceAppointments property.
     */
    public set interactionforemail_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._interactionforemail_ServiceAppointments = value;
    };
    /**
     * Gets the interactionforemailid property value. 
     * @returns a string
     */
    public get interactionforemailid() {
        return this._interactionforemailid;
    };
    /**
     * Sets the interactionforemailid property value. 
     * @param value Value to set for the interactionforemailid property.
     */
    public set interactionforemailid(value: string | undefined) {
        this._interactionforemailid = value;
    };
    /**
     * Gets the interactionlocation property value. 
     * @returns a string
     */
    public get interactionlocation() {
        return this._interactionlocation;
    };
    /**
     * Sets the interactionlocation property value. 
     * @param value Value to set for the interactionlocation property.
     */
    public set interactionlocation(value: string | undefined) {
        this._interactionlocation = value;
    };
    /**
     * Gets the interactionpartyid property value. 
     * @returns a string
     */
    public get interactionpartyid() {
        return this._interactionpartyid;
    };
    /**
     * Sets the interactionpartyid property value. 
     * @param value Value to set for the interactionpartyid property.
     */
    public set interactionpartyid(value: string | undefined) {
        this._interactionpartyid = value;
    };
    /**
     * Gets the interactionrepliedby property value. 
     * @returns a string
     */
    public get interactionrepliedby() {
        return this._interactionrepliedby;
    };
    /**
     * Sets the interactionrepliedby property value. 
     * @param value Value to set for the interactionrepliedby property.
     */
    public set interactionrepliedby(value: string | undefined) {
        this._interactionrepliedby = value;
    };
    /**
     * Gets the interactionreplyid property value. 
     * @returns a string
     */
    public get interactionreplyid() {
        return this._interactionreplyid;
    };
    /**
     * Sets the interactionreplyid property value. 
     * @param value Value to set for the interactionreplyid property.
     */
    public set interactionreplyid(value: string | undefined) {
        this._interactionreplyid = value;
    };
    /**
     * Gets the interactiontype property value. 
     * @returns a integer
     */
    public get interactiontype() {
        return this._interactiontype;
    };
    /**
     * Sets the interactiontype property value. 
     * @param value Value to set for the interactiontype property.
     */
    public set interactiontype(value: number | undefined) {
        this._interactiontype = value;
    };
    /**
     * Gets the interactionuseragent property value. 
     * @returns a string
     */
    public get interactionuseragent() {
        return this._interactionuseragent;
    };
    /**
     * Sets the interactionuseragent property value. 
     * @param value Value to set for the interactionuseragent property.
     */
    public set interactionuseragent(value: string | undefined) {
        this._interactionuseragent = value;
    };
    /**
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
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
     * Gets the new_interactionforemail_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get new_interactionforemail_ActivityPointers() {
        return this._new_interactionforemail_ActivityPointers;
    };
    /**
     * Sets the new_interactionforemail_ActivityPointers property value. 
     * @param value Value to set for the new_interactionforemail_ActivityPointers property.
     */
    public set new_interactionforemail_ActivityPointers(value: Activitypointer[] | undefined) {
        this._new_interactionforemail_ActivityPointers = value;
    };
    /**
     * Gets the new_interactionforemail_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get new_interactionforemail_AsyncOperations() {
        return this._new_interactionforemail_AsyncOperations;
    };
    /**
     * Sets the new_interactionforemail_AsyncOperations property value. 
     * @param value Value to set for the new_interactionforemail_AsyncOperations property.
     */
    public set new_interactionforemail_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._new_interactionforemail_AsyncOperations = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeStringValue("emailactivityid", this.emailactivityid);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeStringValue("emailinteractionreplyid", this.emailinteractionreplyid);
        writer.writeDateValue("emailinteractiontime", this.emailinteractiontime);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("interactedcomponenttext", this.interactedcomponenttext);
        writer.writeCollectionOfObjectValues<Bulkoperation>("interactionforemail_BulkOperations", this.interactionforemail_BulkOperations);
        writer.writeCollectionOfObjectValues<Campaignresponse>("interactionforemail_CampaignResponses", this.interactionforemail_CampaignResponses);
        writer.writeCollectionOfObjectValues<Incidentresolution>("interactionforemail_IncidentResolutions", this.interactionforemail_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("interactionforemail_msdyn_approvals", this.interactionforemail_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("interactionforemail_msdyn_bookingalerts", this.interactionforemail_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("interactionforemail_msdyn_ocliveworkitems", this.interactionforemail_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("interactionforemail_msdyn_ocoutboundmessages", this.interactionforemail_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("interactionforemail_msdyn_ocsessions", this.interactionforemail_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("interactionforemail_msfp_alerts", this.interactionforemail_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("interactionforemail_msfp_surveyinvites", this.interactionforemail_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("interactionforemail_msfp_surveyresponses", this.interactionforemail_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("interactionforemail_OpportunityCloses", this.interactionforemail_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("interactionforemail_OrderCloses", this.interactionforemail_OrderCloses);
        writer.writeCollectionOfObjectValues<Quoteclose>("interactionforemail_QuoteCloses", this.interactionforemail_QuoteCloses);
        writer.writeCollectionOfObjectValues<Serviceappointment>("interactionforemail_ServiceAppointments", this.interactionforemail_ServiceAppointments);
        writer.writeStringValue("interactionforemailid", this.interactionforemailid);
        writer.writeStringValue("interactionlocation", this.interactionlocation);
        writer.writeStringValue("interactionpartyid", this.interactionpartyid);
        writer.writeStringValue("interactionrepliedby", this.interactionrepliedby);
        writer.writeStringValue("interactionreplyid", this.interactionreplyid);
        writer.writeNumberValue("interactiontype", this.interactiontype);
        writer.writeStringValue("interactionuseragent", this.interactionuseragent);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<Activitypointer>("new_interactionforemail_ActivityPointers", this.new_interactionforemail_ActivityPointers);
        writer.writeCollectionOfObjectValues<Asyncoperation>("new_interactionforemail_AsyncOperations", this.new_interactionforemail_AsyncOperations);
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
