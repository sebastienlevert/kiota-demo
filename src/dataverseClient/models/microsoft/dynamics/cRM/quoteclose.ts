import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createEntitlementtemplateFromDiscriminatorValue} from './createEntitlementtemplateFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createInteractionforemailFromDiscriminatorValue} from './createInteractionforemailFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createKnowledgebaserecordFromDiscriminatorValue} from './createKnowledgebaserecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_playbookinstanceFromDiscriminatorValue} from './createMsdyn_playbookinstanceFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperation, Businessunit, Campaign, Campaignactivity, Campaignresponse, Entitlement, Entitlementtemplate, Incident, Interactionforemail, Knowledgearticle, Knowledgebaserecord, Lead, Mailbox, Mailboxtrackingfolder, Msdyn_customerasset, Msdyn_playbookinstance, Opportunity, Principal, Principalobjectattributeaccess, Quote, Service, Site, Sla, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Quoteclose extends Activitypointer implements Parsable {
    private __quoteid_value?: string | undefined;
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _campaignResponse_QuoteCloses?: Campaignresponse[] | undefined;
    private _category?: string | undefined;
    private _createdby_quoteclose?: Systemuser | undefined;
    private _createdonbehalfby_quoteclose?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby_quoteclose?: Systemuser | undefined;
    private _modifiedonbehalfby_quoteclose?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_quoteclose?: Principal | undefined;
    private _owningbusinessunit_quoteclose?: Businessunit | undefined;
    private _owningteam_quoteclose?: Team | undefined;
    private _owninguser_quoteclose?: Systemuser | undefined;
    private _quoteclose_activity_parties?: Activityparty[] | undefined;
    private _quoteClose_Annotation?: Annotation[] | undefined;
    private _quoteClose_AsyncOperations?: Asyncoperation[] | undefined;
    private _quoteClose_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _quoteclose_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _quoteclose_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _quoteClose_SyncErrors?: Syncerror[] | undefined;
    private _quoteid?: Quote | undefined;
    private _quotenumber?: string | undefined;
    private _regardingobjectid_account_quoteclose?: Account | undefined;
    private _regardingobjectid_bookableresourcebooking_quoteclose?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_quoteclose?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_bulkoperation_quoteclose?: Bulkoperation | undefined;
    private _regardingobjectid_campaign_quoteclose?: Campaign | undefined;
    private _regardingobjectid_campaignactivity_quoteclose?: Campaignactivity | undefined;
    private _regardingobjectid_entitlement_quoteclose?: Entitlement | undefined;
    private _regardingobjectid_entitlementtemplate_quoteclose?: Entitlementtemplate | undefined;
    private _regardingobjectid_incident_quoteclose?: Incident | undefined;
    private _regardingobjectid_knowledgearticle_quoteclose?: Knowledgearticle | undefined;
    private _regardingobjectid_knowledgebaserecord_quoteclose?: Knowledgebaserecord | undefined;
    private _regardingobjectid_lead_quoteclose?: Lead | undefined;
    private _regardingobjectid_msdyn_customerasset_quoteclose?: Msdyn_customerasset | undefined;
    private _regardingobjectid_msdyn_playbookinstance_quoteclose?: Msdyn_playbookinstance | undefined;
    private _regardingobjectid_new_interactionforemail_quoteclose?: Interactionforemail | undefined;
    private _regardingobjectid_opportunity_quoteclose?: Opportunity | undefined;
    private _regardingobjectid_quote_quoteclose?: Quote | undefined;
    private _regardingobjectid_site_quoteclose?: Site | undefined;
    private _revision?: number | undefined;
    private _sendermailboxid_quoteclose?: Mailbox | undefined;
    private _serviceid_quoteclose?: Service | undefined;
    private _sla_activitypointer_sla_quoteclose?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_quoteclose?: Sla | undefined;
    private _subcategory?: string | undefined;
    private _transactioncurrencyid_quoteclose?: Transactioncurrency | undefined;
    /**
     * Gets the _quoteid_value property value. 
     * @returns a string
     */
    public get _quoteid_value() {
        return this.__quoteid_value;
    };
    /**
     * Sets the _quoteid_value property value. 
     * @param value Value to set for the _quoteid_value property.
     */
    public set _quoteid_value(value: string | undefined) {
        this.__quoteid_value = value;
    };
    /**
     * Gets the activityid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get activityid_activitypointer() {
        return this._activityid_activitypointer;
    };
    /**
     * Sets the activityid_activitypointer property value. 
     * @param value Value to set for the activityid_activitypointer property.
     */
    public set activityid_activitypointer(value: Activitypointer | undefined) {
        this._activityid_activitypointer = value;
    };
    /**
     * Gets the campaignResponse_QuoteCloses property value. 
     * @returns a campaignresponse
     */
    public get campaignResponse_QuoteCloses() {
        return this._campaignResponse_QuoteCloses;
    };
    /**
     * Sets the campaignResponse_QuoteCloses property value. 
     * @param value Value to set for the CampaignResponse_QuoteCloses property.
     */
    public set campaignResponse_QuoteCloses(value: Campaignresponse[] | undefined) {
        this._campaignResponse_QuoteCloses = value;
    };
    /**
     * Gets the category property value. 
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Instantiates a new quoteclose and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_quoteclose property value. 
     * @returns a systemuser
     */
    public get createdby_quoteclose() {
        return this._createdby_quoteclose;
    };
    /**
     * Sets the createdby_quoteclose property value. 
     * @param value Value to set for the createdby_quoteclose property.
     */
    public set createdby_quoteclose(value: Systemuser | undefined) {
        this._createdby_quoteclose = value;
    };
    /**
     * Gets the createdonbehalfby_quoteclose property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_quoteclose() {
        return this._createdonbehalfby_quoteclose;
    };
    /**
     * Sets the createdonbehalfby_quoteclose property value. 
     * @param value Value to set for the createdonbehalfby_quoteclose property.
     */
    public set createdonbehalfby_quoteclose(value: Systemuser | undefined) {
        this._createdonbehalfby_quoteclose = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_quoteid_value": (o, n) => { (o as unknown as Quoteclose)._quoteid_value = n.getStringValue(); },
            "activityid_activitypointer": (o, n) => { (o as unknown as Quoteclose).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaignResponse_QuoteCloses": (o, n) => { (o as unknown as Quoteclose).campaignResponse_QuoteCloses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Quoteclose).category = n.getStringValue(); },
            "createdby_quoteclose": (o, n) => { (o as unknown as Quoteclose).createdby_quoteclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_quoteclose": (o, n) => { (o as unknown as Quoteclose).createdonbehalfby_quoteclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Quoteclose).importsequencenumber = n.getNumberValue(); },
            "modifiedby_quoteclose": (o, n) => { (o as unknown as Quoteclose).modifiedby_quoteclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_quoteclose": (o, n) => { (o as unknown as Quoteclose).modifiedonbehalfby_quoteclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Quoteclose).overriddencreatedon = n.getDateValue(); },
            "ownerid_quoteclose": (o, n) => { (o as unknown as Quoteclose).ownerid_quoteclose = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_quoteclose": (o, n) => { (o as unknown as Quoteclose).owningbusinessunit_quoteclose = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_quoteclose": (o, n) => { (o as unknown as Quoteclose).owningteam_quoteclose = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_quoteclose": (o, n) => { (o as unknown as Quoteclose).owninguser_quoteclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "quoteclose_activity_parties": (o, n) => { (o as unknown as Quoteclose).quoteclose_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "quoteClose_Annotation": (o, n) => { (o as unknown as Quoteclose).quoteClose_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "quoteClose_AsyncOperations": (o, n) => { (o as unknown as Quoteclose).quoteClose_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "quoteClose_BulkDeleteFailures": (o, n) => { (o as unknown as Quoteclose).quoteClose_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "quoteclose_MailboxTrackingFolders": (o, n) => { (o as unknown as Quoteclose).quoteclose_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "quoteclose_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Quoteclose).quoteclose_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "quoteClose_SyncErrors": (o, n) => { (o as unknown as Quoteclose).quoteClose_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "quoteid": (o, n) => { (o as unknown as Quoteclose).quoteid = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "quotenumber": (o, n) => { (o as unknown as Quoteclose).quotenumber = n.getStringValue(); },
            "regardingobjectid_account_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_account_quoteclose = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_bookableresourcebooking_quoteclose = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_bookableresourcebookingheader_quoteclose = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_bulkoperation_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_bulkoperation_quoteclose = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "regardingobjectid_campaign_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_campaign_quoteclose = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "regardingobjectid_campaignactivity_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_campaignactivity_quoteclose = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "regardingobjectid_entitlement_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_entitlement_quoteclose = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "regardingobjectid_entitlementtemplate_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_entitlementtemplate_quoteclose = n.getObjectValue<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "regardingobjectid_incident_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_incident_quoteclose = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_knowledgearticle_quoteclose = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgebaserecord_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_knowledgebaserecord_quoteclose = n.getObjectValue<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "regardingobjectid_lead_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_lead_quoteclose = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_msdyn_customerasset_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_msdyn_customerasset_quoteclose = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "regardingobjectid_msdyn_playbookinstance_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_msdyn_playbookinstance_quoteclose = n.getObjectValue<Msdyn_playbookinstance>(createMsdyn_playbookinstanceFromDiscriminatorValue); },
            "regardingobjectid_new_interactionforemail_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_new_interactionforemail_quoteclose = n.getObjectValue<Interactionforemail>(createInteractionforemailFromDiscriminatorValue); },
            "regardingobjectid_opportunity_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_opportunity_quoteclose = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_quote_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_quote_quoteclose = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "regardingobjectid_site_quoteclose": (o, n) => { (o as unknown as Quoteclose).regardingobjectid_site_quoteclose = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
            "revision": (o, n) => { (o as unknown as Quoteclose).revision = n.getNumberValue(); },
            "sendermailboxid_quoteclose": (o, n) => { (o as unknown as Quoteclose).sendermailboxid_quoteclose = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "serviceid_quoteclose": (o, n) => { (o as unknown as Quoteclose).serviceid_quoteclose = n.getObjectValue<Service>(createServiceFromDiscriminatorValue); },
            "sla_activitypointer_sla_quoteclose": (o, n) => { (o as unknown as Quoteclose).sla_activitypointer_sla_quoteclose = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_quoteclose": (o, n) => { (o as unknown as Quoteclose).slainvokedid_activitypointer_sla_quoteclose = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "subcategory": (o, n) => { (o as unknown as Quoteclose).subcategory = n.getStringValue(); },
            "transactioncurrencyid_quoteclose": (o, n) => { (o as unknown as Quoteclose).transactioncurrencyid_quoteclose = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
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
     * Gets the modifiedby_quoteclose property value. 
     * @returns a systemuser
     */
    public get modifiedby_quoteclose() {
        return this._modifiedby_quoteclose;
    };
    /**
     * Sets the modifiedby_quoteclose property value. 
     * @param value Value to set for the modifiedby_quoteclose property.
     */
    public set modifiedby_quoteclose(value: Systemuser | undefined) {
        this._modifiedby_quoteclose = value;
    };
    /**
     * Gets the modifiedonbehalfby_quoteclose property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_quoteclose() {
        return this._modifiedonbehalfby_quoteclose;
    };
    /**
     * Sets the modifiedonbehalfby_quoteclose property value. 
     * @param value Value to set for the modifiedonbehalfby_quoteclose property.
     */
    public set modifiedonbehalfby_quoteclose(value: Systemuser | undefined) {
        this._modifiedonbehalfby_quoteclose = value;
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
     * Gets the ownerid_quoteclose property value. 
     * @returns a principal
     */
    public get ownerid_quoteclose() {
        return this._ownerid_quoteclose;
    };
    /**
     * Sets the ownerid_quoteclose property value. 
     * @param value Value to set for the ownerid_quoteclose property.
     */
    public set ownerid_quoteclose(value: Principal | undefined) {
        this._ownerid_quoteclose = value;
    };
    /**
     * Gets the owningbusinessunit_quoteclose property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_quoteclose() {
        return this._owningbusinessunit_quoteclose;
    };
    /**
     * Sets the owningbusinessunit_quoteclose property value. 
     * @param value Value to set for the owningbusinessunit_quoteclose property.
     */
    public set owningbusinessunit_quoteclose(value: Businessunit | undefined) {
        this._owningbusinessunit_quoteclose = value;
    };
    /**
     * Gets the owningteam_quoteclose property value. 
     * @returns a team
     */
    public get owningteam_quoteclose() {
        return this._owningteam_quoteclose;
    };
    /**
     * Sets the owningteam_quoteclose property value. 
     * @param value Value to set for the owningteam_quoteclose property.
     */
    public set owningteam_quoteclose(value: Team | undefined) {
        this._owningteam_quoteclose = value;
    };
    /**
     * Gets the owninguser_quoteclose property value. 
     * @returns a systemuser
     */
    public get owninguser_quoteclose() {
        return this._owninguser_quoteclose;
    };
    /**
     * Sets the owninguser_quoteclose property value. 
     * @param value Value to set for the owninguser_quoteclose property.
     */
    public set owninguser_quoteclose(value: Systemuser | undefined) {
        this._owninguser_quoteclose = value;
    };
    /**
     * Gets the quoteclose_activity_parties property value. 
     * @returns a activityparty
     */
    public get quoteclose_activity_parties() {
        return this._quoteclose_activity_parties;
    };
    /**
     * Sets the quoteclose_activity_parties property value. 
     * @param value Value to set for the quoteclose_activity_parties property.
     */
    public set quoteclose_activity_parties(value: Activityparty[] | undefined) {
        this._quoteclose_activity_parties = value;
    };
    /**
     * Gets the quoteClose_Annotation property value. 
     * @returns a annotation
     */
    public get quoteClose_Annotation() {
        return this._quoteClose_Annotation;
    };
    /**
     * Sets the quoteClose_Annotation property value. 
     * @param value Value to set for the QuoteClose_Annotation property.
     */
    public set quoteClose_Annotation(value: Annotation[] | undefined) {
        this._quoteClose_Annotation = value;
    };
    /**
     * Gets the quoteClose_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get quoteClose_AsyncOperations() {
        return this._quoteClose_AsyncOperations;
    };
    /**
     * Sets the quoteClose_AsyncOperations property value. 
     * @param value Value to set for the QuoteClose_AsyncOperations property.
     */
    public set quoteClose_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._quoteClose_AsyncOperations = value;
    };
    /**
     * Gets the quoteClose_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get quoteClose_BulkDeleteFailures() {
        return this._quoteClose_BulkDeleteFailures;
    };
    /**
     * Sets the quoteClose_BulkDeleteFailures property value. 
     * @param value Value to set for the QuoteClose_BulkDeleteFailures property.
     */
    public set quoteClose_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._quoteClose_BulkDeleteFailures = value;
    };
    /**
     * Gets the quoteclose_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get quoteclose_MailboxTrackingFolders() {
        return this._quoteclose_MailboxTrackingFolders;
    };
    /**
     * Sets the quoteclose_MailboxTrackingFolders property value. 
     * @param value Value to set for the quoteclose_MailboxTrackingFolders property.
     */
    public set quoteclose_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._quoteclose_MailboxTrackingFolders = value;
    };
    /**
     * Gets the quoteclose_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get quoteclose_PrincipalObjectAttributeAccesses() {
        return this._quoteclose_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the quoteclose_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the quoteclose_PrincipalObjectAttributeAccesses property.
     */
    public set quoteclose_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._quoteclose_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the quoteClose_SyncErrors property value. 
     * @returns a syncerror
     */
    public get quoteClose_SyncErrors() {
        return this._quoteClose_SyncErrors;
    };
    /**
     * Sets the quoteClose_SyncErrors property value. 
     * @param value Value to set for the QuoteClose_SyncErrors property.
     */
    public set quoteClose_SyncErrors(value: Syncerror[] | undefined) {
        this._quoteClose_SyncErrors = value;
    };
    /**
     * Gets the quoteid property value. 
     * @returns a quote
     */
    public get quoteid() {
        return this._quoteid;
    };
    /**
     * Sets the quoteid property value. 
     * @param value Value to set for the quoteid property.
     */
    public set quoteid(value: Quote | undefined) {
        this._quoteid = value;
    };
    /**
     * Gets the quotenumber property value. 
     * @returns a string
     */
    public get quotenumber() {
        return this._quotenumber;
    };
    /**
     * Sets the quotenumber property value. 
     * @param value Value to set for the quotenumber property.
     */
    public set quotenumber(value: string | undefined) {
        this._quotenumber = value;
    };
    /**
     * Gets the regardingobjectid_account_quoteclose property value. 
     * @returns a account
     */
    public get regardingobjectid_account_quoteclose() {
        return this._regardingobjectid_account_quoteclose;
    };
    /**
     * Sets the regardingobjectid_account_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_account_quoteclose property.
     */
    public set regardingobjectid_account_quoteclose(value: Account | undefined) {
        this._regardingobjectid_account_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_quoteclose property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_quoteclose() {
        return this._regardingobjectid_bookableresourcebooking_quoteclose;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_quoteclose property.
     */
    public set regardingobjectid_bookableresourcebooking_quoteclose(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_quoteclose property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_quoteclose() {
        return this._regardingobjectid_bookableresourcebookingheader_quoteclose;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_quoteclose property.
     */
    public set regardingobjectid_bookableresourcebookingheader_quoteclose(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_bulkoperation_quoteclose property value. 
     * @returns a bulkoperation
     */
    public get regardingobjectid_bulkoperation_quoteclose() {
        return this._regardingobjectid_bulkoperation_quoteclose;
    };
    /**
     * Sets the regardingobjectid_bulkoperation_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_bulkoperation_quoteclose property.
     */
    public set regardingobjectid_bulkoperation_quoteclose(value: Bulkoperation | undefined) {
        this._regardingobjectid_bulkoperation_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_campaign_quoteclose property value. 
     * @returns a campaign
     */
    public get regardingobjectid_campaign_quoteclose() {
        return this._regardingobjectid_campaign_quoteclose;
    };
    /**
     * Sets the regardingobjectid_campaign_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_campaign_quoteclose property.
     */
    public set regardingobjectid_campaign_quoteclose(value: Campaign | undefined) {
        this._regardingobjectid_campaign_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_campaignactivity_quoteclose property value. 
     * @returns a campaignactivity
     */
    public get regardingobjectid_campaignactivity_quoteclose() {
        return this._regardingobjectid_campaignactivity_quoteclose;
    };
    /**
     * Sets the regardingobjectid_campaignactivity_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_campaignactivity_quoteclose property.
     */
    public set regardingobjectid_campaignactivity_quoteclose(value: Campaignactivity | undefined) {
        this._regardingobjectid_campaignactivity_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_entitlement_quoteclose property value. 
     * @returns a entitlement
     */
    public get regardingobjectid_entitlement_quoteclose() {
        return this._regardingobjectid_entitlement_quoteclose;
    };
    /**
     * Sets the regardingobjectid_entitlement_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_entitlement_quoteclose property.
     */
    public set regardingobjectid_entitlement_quoteclose(value: Entitlement | undefined) {
        this._regardingobjectid_entitlement_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_entitlementtemplate_quoteclose property value. 
     * @returns a entitlementtemplate
     */
    public get regardingobjectid_entitlementtemplate_quoteclose() {
        return this._regardingobjectid_entitlementtemplate_quoteclose;
    };
    /**
     * Sets the regardingobjectid_entitlementtemplate_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_entitlementtemplate_quoteclose property.
     */
    public set regardingobjectid_entitlementtemplate_quoteclose(value: Entitlementtemplate | undefined) {
        this._regardingobjectid_entitlementtemplate_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_incident_quoteclose property value. 
     * @returns a incident
     */
    public get regardingobjectid_incident_quoteclose() {
        return this._regardingobjectid_incident_quoteclose;
    };
    /**
     * Sets the regardingobjectid_incident_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_incident_quoteclose property.
     */
    public set regardingobjectid_incident_quoteclose(value: Incident | undefined) {
        this._regardingobjectid_incident_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle_quoteclose property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle_quoteclose() {
        return this._regardingobjectid_knowledgearticle_quoteclose;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle_quoteclose property.
     */
    public set regardingobjectid_knowledgearticle_quoteclose(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_knowledgebaserecord_quoteclose property value. 
     * @returns a knowledgebaserecord
     */
    public get regardingobjectid_knowledgebaserecord_quoteclose() {
        return this._regardingobjectid_knowledgebaserecord_quoteclose;
    };
    /**
     * Sets the regardingobjectid_knowledgebaserecord_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_knowledgebaserecord_quoteclose property.
     */
    public set regardingobjectid_knowledgebaserecord_quoteclose(value: Knowledgebaserecord | undefined) {
        this._regardingobjectid_knowledgebaserecord_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_lead_quoteclose property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_quoteclose() {
        return this._regardingobjectid_lead_quoteclose;
    };
    /**
     * Sets the regardingobjectid_lead_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_lead_quoteclose property.
     */
    public set regardingobjectid_lead_quoteclose(value: Lead | undefined) {
        this._regardingobjectid_lead_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_customerasset_quoteclose property value. 
     * @returns a msdyn_customerasset
     */
    public get regardingobjectid_msdyn_customerasset_quoteclose() {
        return this._regardingobjectid_msdyn_customerasset_quoteclose;
    };
    /**
     * Sets the regardingobjectid_msdyn_customerasset_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_msdyn_customerasset_quoteclose property.
     */
    public set regardingobjectid_msdyn_customerasset_quoteclose(value: Msdyn_customerasset | undefined) {
        this._regardingobjectid_msdyn_customerasset_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_playbookinstance_quoteclose property value. 
     * @returns a msdyn_playbookinstance
     */
    public get regardingobjectid_msdyn_playbookinstance_quoteclose() {
        return this._regardingobjectid_msdyn_playbookinstance_quoteclose;
    };
    /**
     * Sets the regardingobjectid_msdyn_playbookinstance_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_msdyn_playbookinstance_quoteclose property.
     */
    public set regardingobjectid_msdyn_playbookinstance_quoteclose(value: Msdyn_playbookinstance | undefined) {
        this._regardingobjectid_msdyn_playbookinstance_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_new_interactionforemail_quoteclose property value. 
     * @returns a interactionforemail
     */
    public get regardingobjectid_new_interactionforemail_quoteclose() {
        return this._regardingobjectid_new_interactionforemail_quoteclose;
    };
    /**
     * Sets the regardingobjectid_new_interactionforemail_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_new_interactionforemail_quoteclose property.
     */
    public set regardingobjectid_new_interactionforemail_quoteclose(value: Interactionforemail | undefined) {
        this._regardingobjectid_new_interactionforemail_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_opportunity_quoteclose property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity_quoteclose() {
        return this._regardingobjectid_opportunity_quoteclose;
    };
    /**
     * Sets the regardingobjectid_opportunity_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_opportunity_quoteclose property.
     */
    public set regardingobjectid_opportunity_quoteclose(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_quote_quoteclose property value. 
     * @returns a quote
     */
    public get regardingobjectid_quote_quoteclose() {
        return this._regardingobjectid_quote_quoteclose;
    };
    /**
     * Sets the regardingobjectid_quote_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_quote_quoteclose property.
     */
    public set regardingobjectid_quote_quoteclose(value: Quote | undefined) {
        this._regardingobjectid_quote_quoteclose = value;
    };
    /**
     * Gets the regardingobjectid_site_quoteclose property value. 
     * @returns a site
     */
    public get regardingobjectid_site_quoteclose() {
        return this._regardingobjectid_site_quoteclose;
    };
    /**
     * Sets the regardingobjectid_site_quoteclose property value. 
     * @param value Value to set for the regardingobjectid_site_quoteclose property.
     */
    public set regardingobjectid_site_quoteclose(value: Site | undefined) {
        this._regardingobjectid_site_quoteclose = value;
    };
    /**
     * Gets the revision property value. 
     * @returns a integer
     */
    public get revision() {
        return this._revision;
    };
    /**
     * Sets the revision property value. 
     * @param value Value to set for the revision property.
     */
    public set revision(value: number | undefined) {
        this._revision = value;
    };
    /**
     * Gets the sendermailboxid_quoteclose property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_quoteclose() {
        return this._sendermailboxid_quoteclose;
    };
    /**
     * Sets the sendermailboxid_quoteclose property value. 
     * @param value Value to set for the sendermailboxid_quoteclose property.
     */
    public set sendermailboxid_quoteclose(value: Mailbox | undefined) {
        this._sendermailboxid_quoteclose = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_quoteid_value", this._quoteid_value);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignResponse_QuoteCloses", this.campaignResponse_QuoteCloses);
        writer.writeStringValue("category", this.category);
        writer.writeObjectValue<Systemuser>("createdby_quoteclose", this.createdby_quoteclose);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_quoteclose", this.createdonbehalfby_quoteclose);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby_quoteclose", this.modifiedby_quoteclose);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_quoteclose", this.modifiedonbehalfby_quoteclose);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_quoteclose", this.ownerid_quoteclose);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_quoteclose", this.owningbusinessunit_quoteclose);
        writer.writeObjectValue<Team>("owningteam_quoteclose", this.owningteam_quoteclose);
        writer.writeObjectValue<Systemuser>("owninguser_quoteclose", this.owninguser_quoteclose);
        writer.writeCollectionOfObjectValues<Activityparty>("quoteclose_activity_parties", this.quoteclose_activity_parties);
        writer.writeCollectionOfObjectValues<Annotation>("quoteClose_Annotation", this.quoteClose_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("quoteClose_AsyncOperations", this.quoteClose_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("quoteClose_BulkDeleteFailures", this.quoteClose_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("quoteclose_MailboxTrackingFolders", this.quoteclose_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("quoteclose_PrincipalObjectAttributeAccesses", this.quoteclose_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("quoteClose_SyncErrors", this.quoteClose_SyncErrors);
        writer.writeObjectValue<Quote>("quoteid", this.quoteid);
        writer.writeStringValue("quotenumber", this.quotenumber);
        writer.writeObjectValue<Account>("regardingobjectid_account_quoteclose", this.regardingobjectid_account_quoteclose);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_quoteclose", this.regardingobjectid_bookableresourcebooking_quoteclose);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_quoteclose", this.regardingobjectid_bookableresourcebookingheader_quoteclose);
        writer.writeObjectValue<Bulkoperation>("regardingobjectid_bulkoperation_quoteclose", this.regardingobjectid_bulkoperation_quoteclose);
        writer.writeObjectValue<Campaign>("regardingobjectid_campaign_quoteclose", this.regardingobjectid_campaign_quoteclose);
        writer.writeObjectValue<Campaignactivity>("regardingobjectid_campaignactivity_quoteclose", this.regardingobjectid_campaignactivity_quoteclose);
        writer.writeObjectValue<Entitlement>("regardingobjectid_entitlement_quoteclose", this.regardingobjectid_entitlement_quoteclose);
        writer.writeObjectValue<Entitlementtemplate>("regardingobjectid_entitlementtemplate_quoteclose", this.regardingobjectid_entitlementtemplate_quoteclose);
        writer.writeObjectValue<Incident>("regardingobjectid_incident_quoteclose", this.regardingobjectid_incident_quoteclose);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle_quoteclose", this.regardingobjectid_knowledgearticle_quoteclose);
        writer.writeObjectValue<Knowledgebaserecord>("regardingobjectid_knowledgebaserecord_quoteclose", this.regardingobjectid_knowledgebaserecord_quoteclose);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_quoteclose", this.regardingobjectid_lead_quoteclose);
        writer.writeObjectValue<Msdyn_customerasset>("regardingobjectid_msdyn_customerasset_quoteclose", this.regardingobjectid_msdyn_customerasset_quoteclose);
        writer.writeObjectValue<Msdyn_playbookinstance>("regardingobjectid_msdyn_playbookinstance_quoteclose", this.regardingobjectid_msdyn_playbookinstance_quoteclose);
        writer.writeObjectValue<Interactionforemail>("regardingobjectid_new_interactionforemail_quoteclose", this.regardingobjectid_new_interactionforemail_quoteclose);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity_quoteclose", this.regardingobjectid_opportunity_quoteclose);
        writer.writeObjectValue<Quote>("regardingobjectid_quote_quoteclose", this.regardingobjectid_quote_quoteclose);
        writer.writeObjectValue<Site>("regardingobjectid_site_quoteclose", this.regardingobjectid_site_quoteclose);
        writer.writeNumberValue("revision", this.revision);
        writer.writeObjectValue<Mailbox>("sendermailboxid_quoteclose", this.sendermailboxid_quoteclose);
        writer.writeObjectValue<Service>("serviceid_quoteclose", this.serviceid_quoteclose);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_quoteclose", this.sla_activitypointer_sla_quoteclose);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_quoteclose", this.slainvokedid_activitypointer_sla_quoteclose);
        writer.writeStringValue("subcategory", this.subcategory);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_quoteclose", this.transactioncurrencyid_quoteclose);
    };
    /**
     * Gets the serviceid_quoteclose property value. 
     * @returns a service
     */
    public get serviceid_quoteclose() {
        return this._serviceid_quoteclose;
    };
    /**
     * Sets the serviceid_quoteclose property value. 
     * @param value Value to set for the serviceid_quoteclose property.
     */
    public set serviceid_quoteclose(value: Service | undefined) {
        this._serviceid_quoteclose = value;
    };
    /**
     * Gets the sla_activitypointer_sla_quoteclose property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_quoteclose() {
        return this._sla_activitypointer_sla_quoteclose;
    };
    /**
     * Sets the sla_activitypointer_sla_quoteclose property value. 
     * @param value Value to set for the sla_activitypointer_sla_quoteclose property.
     */
    public set sla_activitypointer_sla_quoteclose(value: Sla | undefined) {
        this._sla_activitypointer_sla_quoteclose = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_quoteclose property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_quoteclose() {
        return this._slainvokedid_activitypointer_sla_quoteclose;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_quoteclose property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_quoteclose property.
     */
    public set slainvokedid_activitypointer_sla_quoteclose(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_quoteclose = value;
    };
    /**
     * Gets the subcategory property value. 
     * @returns a string
     */
    public get subcategory() {
        return this._subcategory;
    };
    /**
     * Sets the subcategory property value. 
     * @param value Value to set for the subcategory property.
     */
    public set subcategory(value: string | undefined) {
        this._subcategory = value;
    };
    /**
     * Gets the transactioncurrencyid_quoteclose property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_quoteclose() {
        return this._transactioncurrencyid_quoteclose;
    };
    /**
     * Sets the transactioncurrencyid_quoteclose property value. 
     * @param value Value to set for the transactioncurrencyid_quoteclose property.
     */
    public set transactioncurrencyid_quoteclose(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_quoteclose = value;
    };
}
