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
import {createCompetitorFromDiscriminatorValue} from './createCompetitorFromDiscriminatorValue';
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
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperation, Businessunit, Campaign, Campaignactivity, Campaignresponse, Competitor, Entitlement, Entitlementtemplate, Incident, Interactionforemail, Knowledgearticle, Knowledgebaserecord, Lead, Mailbox, Mailboxtrackingfolder, Msdyn_customerasset, Msdyn_playbookinstance, Opportunity, Principal, Principalobjectattributeaccess, Service, Site, Sla, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Opportunityclose extends Activitypointer implements Parsable {
    private __competitorid_value?: string | undefined;
    private __opportunityid_value?: string | undefined;
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _actualrevenue?: number | undefined;
    private _actualrevenue_base?: number | undefined;
    private _campaignResponse_OpportunityCloses?: Campaignresponse[] | undefined;
    private _category?: string | undefined;
    private _competitorid?: Competitor | undefined;
    private _createdby_opportunityclose?: Systemuser | undefined;
    private _createdonbehalfby_opportunityclose?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby_opportunityclose?: Systemuser | undefined;
    private _modifiedonbehalfby_opportunityclose?: Systemuser | undefined;
    private _opportunityclose_activity_parties?: Activityparty[] | undefined;
    private _opportunityClose_Annotation?: Annotation[] | undefined;
    private _opportunityClose_AsyncOperations?: Asyncoperation[] | undefined;
    private _opportunityClose_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _opportunityclose_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _opportunityclose_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _opportunityClose_SyncErrors?: Syncerror[] | undefined;
    private _opportunityid?: Opportunity | undefined;
    private _opportunitystatecode?: number | undefined;
    private _opportunitystatuscode?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_opportunityclose?: Principal | undefined;
    private _owningbusinessunit_opportunityclose?: Businessunit | undefined;
    private _owningteam_opportunityclose?: Team | undefined;
    private _owninguser_opportunityclose?: Systemuser | undefined;
    private _regardingobjectid_account_opportunityclose?: Account | undefined;
    private _regardingobjectid_bookableresourcebooking_opportunityclose?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_opportunityclose?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_bulkoperation_opportunityclose?: Bulkoperation | undefined;
    private _regardingobjectid_campaign_opportunityclose?: Campaign | undefined;
    private _regardingobjectid_campaignactivity_opportunityclose?: Campaignactivity | undefined;
    private _regardingobjectid_entitlement_opportunityclose?: Entitlement | undefined;
    private _regardingobjectid_entitlementtemplate_opportunityclose?: Entitlementtemplate | undefined;
    private _regardingobjectid_incident_opportunityclose?: Incident | undefined;
    private _regardingobjectid_knowledgearticle_opportunityclose?: Knowledgearticle | undefined;
    private _regardingobjectid_knowledgebaserecord_opportunityclose?: Knowledgebaserecord | undefined;
    private _regardingobjectid_lead_opportunityclose?: Lead | undefined;
    private _regardingobjectid_msdyn_customerasset_opportunityclose?: Msdyn_customerasset | undefined;
    private _regardingobjectid_msdyn_playbookinstance_opportunityclose?: Msdyn_playbookinstance | undefined;
    private _regardingobjectid_new_interactionforemail_opportunityclose?: Interactionforemail | undefined;
    private _regardingobjectid_opportunity_opportunityclose?: Opportunity | undefined;
    private _regardingobjectid_site_opportunityclose?: Site | undefined;
    private _sendermailboxid_opportunityclose?: Mailbox | undefined;
    private _serviceid_opportunityclose?: Service | undefined;
    private _sla_activitypointer_sla_opportunityclose?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_opportunityclose?: Sla | undefined;
    private _subcategory?: string | undefined;
    private _transactioncurrencyid_opportunityclose?: Transactioncurrency | undefined;
    /**
     * Gets the _competitorid_value property value. 
     * @returns a string
     */
    public get _competitorid_value() {
        return this.__competitorid_value;
    };
    /**
     * Sets the _competitorid_value property value. 
     * @param value Value to set for the _competitorid_value property.
     */
    public set _competitorid_value(value: string | undefined) {
        this.__competitorid_value = value;
    };
    /**
     * Gets the _opportunityid_value property value. 
     * @returns a string
     */
    public get _opportunityid_value() {
        return this.__opportunityid_value;
    };
    /**
     * Sets the _opportunityid_value property value. 
     * @param value Value to set for the _opportunityid_value property.
     */
    public set _opportunityid_value(value: string | undefined) {
        this.__opportunityid_value = value;
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
     * Gets the actualrevenue property value. 
     * @returns a int64
     */
    public get actualrevenue() {
        return this._actualrevenue;
    };
    /**
     * Sets the actualrevenue property value. 
     * @param value Value to set for the actualrevenue property.
     */
    public set actualrevenue(value: number | undefined) {
        this._actualrevenue = value;
    };
    /**
     * Gets the actualrevenue_base property value. 
     * @returns a int64
     */
    public get actualrevenue_base() {
        return this._actualrevenue_base;
    };
    /**
     * Sets the actualrevenue_base property value. 
     * @param value Value to set for the actualrevenue_base property.
     */
    public set actualrevenue_base(value: number | undefined) {
        this._actualrevenue_base = value;
    };
    /**
     * Gets the campaignResponse_OpportunityCloses property value. 
     * @returns a campaignresponse
     */
    public get campaignResponse_OpportunityCloses() {
        return this._campaignResponse_OpportunityCloses;
    };
    /**
     * Sets the campaignResponse_OpportunityCloses property value. 
     * @param value Value to set for the CampaignResponse_OpportunityCloses property.
     */
    public set campaignResponse_OpportunityCloses(value: Campaignresponse[] | undefined) {
        this._campaignResponse_OpportunityCloses = value;
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
     * Gets the competitorid property value. 
     * @returns a competitor
     */
    public get competitorid() {
        return this._competitorid;
    };
    /**
     * Sets the competitorid property value. 
     * @param value Value to set for the competitorid property.
     */
    public set competitorid(value: Competitor | undefined) {
        this._competitorid = value;
    };
    /**
     * Instantiates a new opportunityclose and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_opportunityclose property value. 
     * @returns a systemuser
     */
    public get createdby_opportunityclose() {
        return this._createdby_opportunityclose;
    };
    /**
     * Sets the createdby_opportunityclose property value. 
     * @param value Value to set for the createdby_opportunityclose property.
     */
    public set createdby_opportunityclose(value: Systemuser | undefined) {
        this._createdby_opportunityclose = value;
    };
    /**
     * Gets the createdonbehalfby_opportunityclose property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_opportunityclose() {
        return this._createdonbehalfby_opportunityclose;
    };
    /**
     * Sets the createdonbehalfby_opportunityclose property value. 
     * @param value Value to set for the createdonbehalfby_opportunityclose property.
     */
    public set createdonbehalfby_opportunityclose(value: Systemuser | undefined) {
        this._createdonbehalfby_opportunityclose = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_competitorid_value": (o, n) => { (o as unknown as Opportunityclose)._competitorid_value = n.getStringValue(); },
            "_opportunityid_value": (o, n) => { (o as unknown as Opportunityclose)._opportunityid_value = n.getStringValue(); },
            "activityid_activitypointer": (o, n) => { (o as unknown as Opportunityclose).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "actualrevenue": (o, n) => { (o as unknown as Opportunityclose).actualrevenue = n.getNumberValue(); },
            "actualrevenue_base": (o, n) => { (o as unknown as Opportunityclose).actualrevenue_base = n.getNumberValue(); },
            "campaignResponse_OpportunityCloses": (o, n) => { (o as unknown as Opportunityclose).campaignResponse_OpportunityCloses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Opportunityclose).category = n.getStringValue(); },
            "competitorid": (o, n) => { (o as unknown as Opportunityclose).competitorid = n.getObjectValue<Competitor>(createCompetitorFromDiscriminatorValue); },
            "createdby_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).createdby_opportunityclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).createdonbehalfby_opportunityclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Opportunityclose).importsequencenumber = n.getNumberValue(); },
            "modifiedby_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).modifiedby_opportunityclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).modifiedonbehalfby_opportunityclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "opportunityclose_activity_parties": (o, n) => { (o as unknown as Opportunityclose).opportunityclose_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "opportunityClose_Annotation": (o, n) => { (o as unknown as Opportunityclose).opportunityClose_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "opportunityClose_AsyncOperations": (o, n) => { (o as unknown as Opportunityclose).opportunityClose_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "opportunityClose_BulkDeleteFailures": (o, n) => { (o as unknown as Opportunityclose).opportunityClose_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "opportunityclose_MailboxTrackingFolders": (o, n) => { (o as unknown as Opportunityclose).opportunityclose_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "opportunityclose_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Opportunityclose).opportunityclose_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "opportunityClose_SyncErrors": (o, n) => { (o as unknown as Opportunityclose).opportunityClose_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "opportunityid": (o, n) => { (o as unknown as Opportunityclose).opportunityid = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "opportunitystatecode": (o, n) => { (o as unknown as Opportunityclose).opportunitystatecode = n.getNumberValue(); },
            "opportunitystatuscode": (o, n) => { (o as unknown as Opportunityclose).opportunitystatuscode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Opportunityclose).overriddencreatedon = n.getDateValue(); },
            "ownerid_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).ownerid_opportunityclose = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).owningbusinessunit_opportunityclose = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).owningteam_opportunityclose = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).owninguser_opportunityclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_account_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_account_opportunityclose = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_bookableresourcebooking_opportunityclose = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_bookableresourcebookingheader_opportunityclose = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_bulkoperation_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_bulkoperation_opportunityclose = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "regardingobjectid_campaign_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_campaign_opportunityclose = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "regardingobjectid_campaignactivity_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_campaignactivity_opportunityclose = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "regardingobjectid_entitlement_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_entitlement_opportunityclose = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "regardingobjectid_entitlementtemplate_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_entitlementtemplate_opportunityclose = n.getObjectValue<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "regardingobjectid_incident_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_incident_opportunityclose = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_knowledgearticle_opportunityclose = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgebaserecord_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_knowledgebaserecord_opportunityclose = n.getObjectValue<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "regardingobjectid_lead_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_lead_opportunityclose = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_msdyn_customerasset_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_msdyn_customerasset_opportunityclose = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "regardingobjectid_msdyn_playbookinstance_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_msdyn_playbookinstance_opportunityclose = n.getObjectValue<Msdyn_playbookinstance>(createMsdyn_playbookinstanceFromDiscriminatorValue); },
            "regardingobjectid_new_interactionforemail_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_new_interactionforemail_opportunityclose = n.getObjectValue<Interactionforemail>(createInteractionforemailFromDiscriminatorValue); },
            "regardingobjectid_opportunity_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_opportunity_opportunityclose = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_site_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).regardingobjectid_site_opportunityclose = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
            "sendermailboxid_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).sendermailboxid_opportunityclose = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "serviceid_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).serviceid_opportunityclose = n.getObjectValue<Service>(createServiceFromDiscriminatorValue); },
            "sla_activitypointer_sla_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).sla_activitypointer_sla_opportunityclose = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).slainvokedid_activitypointer_sla_opportunityclose = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "subcategory": (o, n) => { (o as unknown as Opportunityclose).subcategory = n.getStringValue(); },
            "transactioncurrencyid_opportunityclose": (o, n) => { (o as unknown as Opportunityclose).transactioncurrencyid_opportunityclose = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
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
     * Gets the modifiedby_opportunityclose property value. 
     * @returns a systemuser
     */
    public get modifiedby_opportunityclose() {
        return this._modifiedby_opportunityclose;
    };
    /**
     * Sets the modifiedby_opportunityclose property value. 
     * @param value Value to set for the modifiedby_opportunityclose property.
     */
    public set modifiedby_opportunityclose(value: Systemuser | undefined) {
        this._modifiedby_opportunityclose = value;
    };
    /**
     * Gets the modifiedonbehalfby_opportunityclose property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_opportunityclose() {
        return this._modifiedonbehalfby_opportunityclose;
    };
    /**
     * Sets the modifiedonbehalfby_opportunityclose property value. 
     * @param value Value to set for the modifiedonbehalfby_opportunityclose property.
     */
    public set modifiedonbehalfby_opportunityclose(value: Systemuser | undefined) {
        this._modifiedonbehalfby_opportunityclose = value;
    };
    /**
     * Gets the opportunityclose_activity_parties property value. 
     * @returns a activityparty
     */
    public get opportunityclose_activity_parties() {
        return this._opportunityclose_activity_parties;
    };
    /**
     * Sets the opportunityclose_activity_parties property value. 
     * @param value Value to set for the opportunityclose_activity_parties property.
     */
    public set opportunityclose_activity_parties(value: Activityparty[] | undefined) {
        this._opportunityclose_activity_parties = value;
    };
    /**
     * Gets the opportunityClose_Annotation property value. 
     * @returns a annotation
     */
    public get opportunityClose_Annotation() {
        return this._opportunityClose_Annotation;
    };
    /**
     * Sets the opportunityClose_Annotation property value. 
     * @param value Value to set for the OpportunityClose_Annotation property.
     */
    public set opportunityClose_Annotation(value: Annotation[] | undefined) {
        this._opportunityClose_Annotation = value;
    };
    /**
     * Gets the opportunityClose_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get opportunityClose_AsyncOperations() {
        return this._opportunityClose_AsyncOperations;
    };
    /**
     * Sets the opportunityClose_AsyncOperations property value. 
     * @param value Value to set for the OpportunityClose_AsyncOperations property.
     */
    public set opportunityClose_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._opportunityClose_AsyncOperations = value;
    };
    /**
     * Gets the opportunityClose_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get opportunityClose_BulkDeleteFailures() {
        return this._opportunityClose_BulkDeleteFailures;
    };
    /**
     * Sets the opportunityClose_BulkDeleteFailures property value. 
     * @param value Value to set for the OpportunityClose_BulkDeleteFailures property.
     */
    public set opportunityClose_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._opportunityClose_BulkDeleteFailures = value;
    };
    /**
     * Gets the opportunityclose_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get opportunityclose_MailboxTrackingFolders() {
        return this._opportunityclose_MailboxTrackingFolders;
    };
    /**
     * Sets the opportunityclose_MailboxTrackingFolders property value. 
     * @param value Value to set for the opportunityclose_MailboxTrackingFolders property.
     */
    public set opportunityclose_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._opportunityclose_MailboxTrackingFolders = value;
    };
    /**
     * Gets the opportunityclose_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get opportunityclose_PrincipalObjectAttributeAccesses() {
        return this._opportunityclose_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the opportunityclose_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the opportunityclose_PrincipalObjectAttributeAccesses property.
     */
    public set opportunityclose_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._opportunityclose_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the opportunityClose_SyncErrors property value. 
     * @returns a syncerror
     */
    public get opportunityClose_SyncErrors() {
        return this._opportunityClose_SyncErrors;
    };
    /**
     * Sets the opportunityClose_SyncErrors property value. 
     * @param value Value to set for the OpportunityClose_SyncErrors property.
     */
    public set opportunityClose_SyncErrors(value: Syncerror[] | undefined) {
        this._opportunityClose_SyncErrors = value;
    };
    /**
     * Gets the opportunityid property value. 
     * @returns a opportunity
     */
    public get opportunityid() {
        return this._opportunityid;
    };
    /**
     * Sets the opportunityid property value. 
     * @param value Value to set for the opportunityid property.
     */
    public set opportunityid(value: Opportunity | undefined) {
        this._opportunityid = value;
    };
    /**
     * Gets the opportunitystatecode property value. 
     * @returns a integer
     */
    public get opportunitystatecode() {
        return this._opportunitystatecode;
    };
    /**
     * Sets the opportunitystatecode property value. 
     * @param value Value to set for the opportunitystatecode property.
     */
    public set opportunitystatecode(value: number | undefined) {
        this._opportunitystatecode = value;
    };
    /**
     * Gets the opportunitystatuscode property value. 
     * @returns a integer
     */
    public get opportunitystatuscode() {
        return this._opportunitystatuscode;
    };
    /**
     * Sets the opportunitystatuscode property value. 
     * @param value Value to set for the opportunitystatuscode property.
     */
    public set opportunitystatuscode(value: number | undefined) {
        this._opportunitystatuscode = value;
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
     * Gets the ownerid_opportunityclose property value. 
     * @returns a principal
     */
    public get ownerid_opportunityclose() {
        return this._ownerid_opportunityclose;
    };
    /**
     * Sets the ownerid_opportunityclose property value. 
     * @param value Value to set for the ownerid_opportunityclose property.
     */
    public set ownerid_opportunityclose(value: Principal | undefined) {
        this._ownerid_opportunityclose = value;
    };
    /**
     * Gets the owningbusinessunit_opportunityclose property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_opportunityclose() {
        return this._owningbusinessunit_opportunityclose;
    };
    /**
     * Sets the owningbusinessunit_opportunityclose property value. 
     * @param value Value to set for the owningbusinessunit_opportunityclose property.
     */
    public set owningbusinessunit_opportunityclose(value: Businessunit | undefined) {
        this._owningbusinessunit_opportunityclose = value;
    };
    /**
     * Gets the owningteam_opportunityclose property value. 
     * @returns a team
     */
    public get owningteam_opportunityclose() {
        return this._owningteam_opportunityclose;
    };
    /**
     * Sets the owningteam_opportunityclose property value. 
     * @param value Value to set for the owningteam_opportunityclose property.
     */
    public set owningteam_opportunityclose(value: Team | undefined) {
        this._owningteam_opportunityclose = value;
    };
    /**
     * Gets the owninguser_opportunityclose property value. 
     * @returns a systemuser
     */
    public get owninguser_opportunityclose() {
        return this._owninguser_opportunityclose;
    };
    /**
     * Sets the owninguser_opportunityclose property value. 
     * @param value Value to set for the owninguser_opportunityclose property.
     */
    public set owninguser_opportunityclose(value: Systemuser | undefined) {
        this._owninguser_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_account_opportunityclose property value. 
     * @returns a account
     */
    public get regardingobjectid_account_opportunityclose() {
        return this._regardingobjectid_account_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_account_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_account_opportunityclose property.
     */
    public set regardingobjectid_account_opportunityclose(value: Account | undefined) {
        this._regardingobjectid_account_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_opportunityclose property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_opportunityclose() {
        return this._regardingobjectid_bookableresourcebooking_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_opportunityclose property.
     */
    public set regardingobjectid_bookableresourcebooking_opportunityclose(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_opportunityclose property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_opportunityclose() {
        return this._regardingobjectid_bookableresourcebookingheader_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_opportunityclose property.
     */
    public set regardingobjectid_bookableresourcebookingheader_opportunityclose(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_bulkoperation_opportunityclose property value. 
     * @returns a bulkoperation
     */
    public get regardingobjectid_bulkoperation_opportunityclose() {
        return this._regardingobjectid_bulkoperation_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_bulkoperation_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_bulkoperation_opportunityclose property.
     */
    public set regardingobjectid_bulkoperation_opportunityclose(value: Bulkoperation | undefined) {
        this._regardingobjectid_bulkoperation_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_campaign_opportunityclose property value. 
     * @returns a campaign
     */
    public get regardingobjectid_campaign_opportunityclose() {
        return this._regardingobjectid_campaign_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_campaign_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_campaign_opportunityclose property.
     */
    public set regardingobjectid_campaign_opportunityclose(value: Campaign | undefined) {
        this._regardingobjectid_campaign_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_campaignactivity_opportunityclose property value. 
     * @returns a campaignactivity
     */
    public get regardingobjectid_campaignactivity_opportunityclose() {
        return this._regardingobjectid_campaignactivity_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_campaignactivity_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_campaignactivity_opportunityclose property.
     */
    public set regardingobjectid_campaignactivity_opportunityclose(value: Campaignactivity | undefined) {
        this._regardingobjectid_campaignactivity_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_entitlement_opportunityclose property value. 
     * @returns a entitlement
     */
    public get regardingobjectid_entitlement_opportunityclose() {
        return this._regardingobjectid_entitlement_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_entitlement_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_entitlement_opportunityclose property.
     */
    public set regardingobjectid_entitlement_opportunityclose(value: Entitlement | undefined) {
        this._regardingobjectid_entitlement_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_entitlementtemplate_opportunityclose property value. 
     * @returns a entitlementtemplate
     */
    public get regardingobjectid_entitlementtemplate_opportunityclose() {
        return this._regardingobjectid_entitlementtemplate_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_entitlementtemplate_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_entitlementtemplate_opportunityclose property.
     */
    public set regardingobjectid_entitlementtemplate_opportunityclose(value: Entitlementtemplate | undefined) {
        this._regardingobjectid_entitlementtemplate_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_incident_opportunityclose property value. 
     * @returns a incident
     */
    public get regardingobjectid_incident_opportunityclose() {
        return this._regardingobjectid_incident_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_incident_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_incident_opportunityclose property.
     */
    public set regardingobjectid_incident_opportunityclose(value: Incident | undefined) {
        this._regardingobjectid_incident_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle_opportunityclose property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle_opportunityclose() {
        return this._regardingobjectid_knowledgearticle_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle_opportunityclose property.
     */
    public set regardingobjectid_knowledgearticle_opportunityclose(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_knowledgebaserecord_opportunityclose property value. 
     * @returns a knowledgebaserecord
     */
    public get regardingobjectid_knowledgebaserecord_opportunityclose() {
        return this._regardingobjectid_knowledgebaserecord_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_knowledgebaserecord_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_knowledgebaserecord_opportunityclose property.
     */
    public set regardingobjectid_knowledgebaserecord_opportunityclose(value: Knowledgebaserecord | undefined) {
        this._regardingobjectid_knowledgebaserecord_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_lead_opportunityclose property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_opportunityclose() {
        return this._regardingobjectid_lead_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_lead_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_lead_opportunityclose property.
     */
    public set regardingobjectid_lead_opportunityclose(value: Lead | undefined) {
        this._regardingobjectid_lead_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_customerasset_opportunityclose property value. 
     * @returns a msdyn_customerasset
     */
    public get regardingobjectid_msdyn_customerasset_opportunityclose() {
        return this._regardingobjectid_msdyn_customerasset_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_msdyn_customerasset_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_msdyn_customerasset_opportunityclose property.
     */
    public set regardingobjectid_msdyn_customerasset_opportunityclose(value: Msdyn_customerasset | undefined) {
        this._regardingobjectid_msdyn_customerasset_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_playbookinstance_opportunityclose property value. 
     * @returns a msdyn_playbookinstance
     */
    public get regardingobjectid_msdyn_playbookinstance_opportunityclose() {
        return this._regardingobjectid_msdyn_playbookinstance_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_msdyn_playbookinstance_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_msdyn_playbookinstance_opportunityclose property.
     */
    public set regardingobjectid_msdyn_playbookinstance_opportunityclose(value: Msdyn_playbookinstance | undefined) {
        this._regardingobjectid_msdyn_playbookinstance_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_new_interactionforemail_opportunityclose property value. 
     * @returns a interactionforemail
     */
    public get regardingobjectid_new_interactionforemail_opportunityclose() {
        return this._regardingobjectid_new_interactionforemail_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_new_interactionforemail_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_new_interactionforemail_opportunityclose property.
     */
    public set regardingobjectid_new_interactionforemail_opportunityclose(value: Interactionforemail | undefined) {
        this._regardingobjectid_new_interactionforemail_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_opportunity_opportunityclose property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity_opportunityclose() {
        return this._regardingobjectid_opportunity_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_opportunity_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_opportunity_opportunityclose property.
     */
    public set regardingobjectid_opportunity_opportunityclose(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity_opportunityclose = value;
    };
    /**
     * Gets the regardingobjectid_site_opportunityclose property value. 
     * @returns a site
     */
    public get regardingobjectid_site_opportunityclose() {
        return this._regardingobjectid_site_opportunityclose;
    };
    /**
     * Sets the regardingobjectid_site_opportunityclose property value. 
     * @param value Value to set for the regardingobjectid_site_opportunityclose property.
     */
    public set regardingobjectid_site_opportunityclose(value: Site | undefined) {
        this._regardingobjectid_site_opportunityclose = value;
    };
    /**
     * Gets the sendermailboxid_opportunityclose property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_opportunityclose() {
        return this._sendermailboxid_opportunityclose;
    };
    /**
     * Sets the sendermailboxid_opportunityclose property value. 
     * @param value Value to set for the sendermailboxid_opportunityclose property.
     */
    public set sendermailboxid_opportunityclose(value: Mailbox | undefined) {
        this._sendermailboxid_opportunityclose = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_competitorid_value", this._competitorid_value);
        writer.writeStringValue("_opportunityid_value", this._opportunityid_value);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeNumberValue("actualrevenue", this.actualrevenue);
        writer.writeNumberValue("actualrevenue_base", this.actualrevenue_base);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignResponse_OpportunityCloses", this.campaignResponse_OpportunityCloses);
        writer.writeStringValue("category", this.category);
        writer.writeObjectValue<Competitor>("competitorid", this.competitorid);
        writer.writeObjectValue<Systemuser>("createdby_opportunityclose", this.createdby_opportunityclose);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_opportunityclose", this.createdonbehalfby_opportunityclose);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby_opportunityclose", this.modifiedby_opportunityclose);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_opportunityclose", this.modifiedonbehalfby_opportunityclose);
        writer.writeCollectionOfObjectValues<Activityparty>("opportunityclose_activity_parties", this.opportunityclose_activity_parties);
        writer.writeCollectionOfObjectValues<Annotation>("opportunityClose_Annotation", this.opportunityClose_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("opportunityClose_AsyncOperations", this.opportunityClose_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("opportunityClose_BulkDeleteFailures", this.opportunityClose_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("opportunityclose_MailboxTrackingFolders", this.opportunityclose_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("opportunityclose_PrincipalObjectAttributeAccesses", this.opportunityclose_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("opportunityClose_SyncErrors", this.opportunityClose_SyncErrors);
        writer.writeObjectValue<Opportunity>("opportunityid", this.opportunityid);
        writer.writeNumberValue("opportunitystatecode", this.opportunitystatecode);
        writer.writeNumberValue("opportunitystatuscode", this.opportunitystatuscode);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_opportunityclose", this.ownerid_opportunityclose);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_opportunityclose", this.owningbusinessunit_opportunityclose);
        writer.writeObjectValue<Team>("owningteam_opportunityclose", this.owningteam_opportunityclose);
        writer.writeObjectValue<Systemuser>("owninguser_opportunityclose", this.owninguser_opportunityclose);
        writer.writeObjectValue<Account>("regardingobjectid_account_opportunityclose", this.regardingobjectid_account_opportunityclose);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_opportunityclose", this.regardingobjectid_bookableresourcebooking_opportunityclose);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_opportunityclose", this.regardingobjectid_bookableresourcebookingheader_opportunityclose);
        writer.writeObjectValue<Bulkoperation>("regardingobjectid_bulkoperation_opportunityclose", this.regardingobjectid_bulkoperation_opportunityclose);
        writer.writeObjectValue<Campaign>("regardingobjectid_campaign_opportunityclose", this.regardingobjectid_campaign_opportunityclose);
        writer.writeObjectValue<Campaignactivity>("regardingobjectid_campaignactivity_opportunityclose", this.regardingobjectid_campaignactivity_opportunityclose);
        writer.writeObjectValue<Entitlement>("regardingobjectid_entitlement_opportunityclose", this.regardingobjectid_entitlement_opportunityclose);
        writer.writeObjectValue<Entitlementtemplate>("regardingobjectid_entitlementtemplate_opportunityclose", this.regardingobjectid_entitlementtemplate_opportunityclose);
        writer.writeObjectValue<Incident>("regardingobjectid_incident_opportunityclose", this.regardingobjectid_incident_opportunityclose);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle_opportunityclose", this.regardingobjectid_knowledgearticle_opportunityclose);
        writer.writeObjectValue<Knowledgebaserecord>("regardingobjectid_knowledgebaserecord_opportunityclose", this.regardingobjectid_knowledgebaserecord_opportunityclose);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_opportunityclose", this.regardingobjectid_lead_opportunityclose);
        writer.writeObjectValue<Msdyn_customerasset>("regardingobjectid_msdyn_customerasset_opportunityclose", this.regardingobjectid_msdyn_customerasset_opportunityclose);
        writer.writeObjectValue<Msdyn_playbookinstance>("regardingobjectid_msdyn_playbookinstance_opportunityclose", this.regardingobjectid_msdyn_playbookinstance_opportunityclose);
        writer.writeObjectValue<Interactionforemail>("regardingobjectid_new_interactionforemail_opportunityclose", this.regardingobjectid_new_interactionforemail_opportunityclose);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity_opportunityclose", this.regardingobjectid_opportunity_opportunityclose);
        writer.writeObjectValue<Site>("regardingobjectid_site_opportunityclose", this.regardingobjectid_site_opportunityclose);
        writer.writeObjectValue<Mailbox>("sendermailboxid_opportunityclose", this.sendermailboxid_opportunityclose);
        writer.writeObjectValue<Service>("serviceid_opportunityclose", this.serviceid_opportunityclose);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_opportunityclose", this.sla_activitypointer_sla_opportunityclose);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_opportunityclose", this.slainvokedid_activitypointer_sla_opportunityclose);
        writer.writeStringValue("subcategory", this.subcategory);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_opportunityclose", this.transactioncurrencyid_opportunityclose);
    };
    /**
     * Gets the serviceid_opportunityclose property value. 
     * @returns a service
     */
    public get serviceid_opportunityclose() {
        return this._serviceid_opportunityclose;
    };
    /**
     * Sets the serviceid_opportunityclose property value. 
     * @param value Value to set for the serviceid_opportunityclose property.
     */
    public set serviceid_opportunityclose(value: Service | undefined) {
        this._serviceid_opportunityclose = value;
    };
    /**
     * Gets the sla_activitypointer_sla_opportunityclose property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_opportunityclose() {
        return this._sla_activitypointer_sla_opportunityclose;
    };
    /**
     * Sets the sla_activitypointer_sla_opportunityclose property value. 
     * @param value Value to set for the sla_activitypointer_sla_opportunityclose property.
     */
    public set sla_activitypointer_sla_opportunityclose(value: Sla | undefined) {
        this._sla_activitypointer_sla_opportunityclose = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_opportunityclose property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_opportunityclose() {
        return this._slainvokedid_activitypointer_sla_opportunityclose;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_opportunityclose property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_opportunityclose property.
     */
    public set slainvokedid_activitypointer_sla_opportunityclose(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_opportunityclose = value;
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
     * Gets the transactioncurrencyid_opportunityclose property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_opportunityclose() {
        return this._transactioncurrencyid_opportunityclose;
    };
    /**
     * Sets the transactioncurrencyid_opportunityclose property value. 
     * @param value Value to set for the transactioncurrencyid_opportunityclose property.
     */
    public set transactioncurrencyid_opportunityclose(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_opportunityclose = value;
    };
}
